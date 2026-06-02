const express = require('express');
const app = express();
const port = 9999;

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { connection,
    establishConnection,
    query,
    commitQuery,
    endConnection, } = require('/workspaces/myWebJune2026/database/localdb');

const {sql} = require('/workspaces/myWebJune2026/database/query');    

app.listen(port, () => {
    console.log("server is running on ", port);
});


app.get('/api/dbconn', (req, res) => {
    connection.connect((err) => {
        if (err) {
            console.error('Connection failed: ' + err.stack);
            return;
        }
        console.log('Connected to Aiven MySQL... Connection ID: ' + connection.threadId);
    });

    query(sql).then(results => {
        res.json({ query: results });
    }).catch(error => {
        console.error('Query error: ' + error.stack);
        res.status(500).json({ error: 'Database query failed' });
    });
    console.log(connection.threadId + ' is ended');
    connection.end(); // Close the connection after the query is executed

});



app.get('/api/get', (req, res) => {
    req.json({
        "message": "test successfully",
        "id": "md001"
    });
});
app.post('/api/post', (req, res) => {
    //req.body
    body = req.body;
    //req.headers
    headers = req.headers;
    headerID = req.headers['headerid'];
    //req.query
    param = req.query.paramID;
    console.log("Data log from User : ", body, headers, headerID, param)
    res.json({
        'message': 'post',
        'body': body,
        'headers': headers,
        'headerID': headerID,
        'param': param
    });

});