const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port:  '3307',
    user: 'root',
    password: '',
    database: 'STUDENTSREG'
});

const establishConnection = (connection) => {  
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to the database!');
    });
}

const query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log('The solution is: ', results);
            resolve(results);
        });
    });
}

//todo: add commit to close the transaction after the update query is executed
const commitQuery = () => {
    return new Promise((resolve, reject) => {
        query(sql).commit((error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

const endConnection = () => {
    //end the connection when done
    connection.end((err) => {
        if (err) {
            console.error('Error ending the connection: ' + err.stack);
            return;
        }
        console.log('Connection ended successfully.');
    });
}

module.exports = {
    connection,
    establishConnection,
    query,
    commitQuery,
    endConnection,
};