# myWebJune2026

# install MariaDb on virtual machine ubuntu

Install Mariadb

```
sudo apt update
sudo apt install mariadb-server -y

```

Test running service

```

@lethunguyen ➜ /workspaces/myWebJune2026 (main) $ sudo -s
root ➜ /workspaces/myWebJune2026 (main) $ service mariadb start
```

login
```

root ➜ /workspaces/myWebJune2026 (main) $ mysql -u root -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 33
Server version: 11.8.6-MariaDB-0+deb13u1 from Debian -- Please help get to 10k stars at https://github.com/MariaDB/Server

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.001 sec)

MariaDB [(none)]> 
```

# TEST STUDENTSREG.sql

```
MariaDB [STUDENTSREG]> 
MariaDB [STUDENTSREG]> 
MariaDB [STUDENTSREG]>     show tables;
+-----------------------+
| Tables_in_STUDENTSREG |
+-----------------------+
| LEARN_PREFERENCE      |
| MODULES               |
| STUDENT               |
| STUDENT_ENROLEMENT    |
| TOPICS                |
| TUTOR                 |
+-----------------------+
6 rows in set (0.000 sec)

MariaDB [STUDENTSREG]> select * from student;
ERROR 1146 (42S02): Table 'STUDENTSREG.student' doesn't exist
MariaDB [STUDENTSREG]> select * from STUDENT;
+------+--------------------------+-------------+----------+
| SID  | SNAME                    | EMAIL       | Tutor_Id |
+------+--------------------------+-------------+----------+
| 1000 | Abdul Basit Chaudhry     | abc@abc.com | 1003     |
| 1001 | Daniel Everret Fernandes | def@def.com | 1000     |
| 1002 | Gigi Hadi Ingram         | ghi@ghi.com | 1001     |
| 1003 | Jacob Knowle Lewis       | jkl@jkl.com | 1002     |
| 1004 | Martin Newton Oolu       | mno@mno.com | 1002     |
| 1005 | Patrick Quinn Rogers     | pqr@pqr.com | 1002     |
| 1006 | Shabaz Tanveer Ucch      | stu@stu.com | 1001     |
| 1007 | Umar Victor Qayyum       | uvq@stu.com | 1001     |
| 1008 | Qais Russell Stuart      | qrs@qrs.com | 1000     |
| 1009 | Rachel Shaw Trump        | rst@rst.com | 1000     |
| 1010 | Tania Uno Victoria       | tuv@tuv.com | 1000     |
| 1011 | Umber Vishal Xavier      | uvx@uvx.com | 1002     |
| 1012 | James Baker              | jb@jb.com   | NULL     |
+------+--------------------------+-------------+----------+
13 rows in set (0.000 sec)

MariaDB [STUDENTSREG]> 
```

# Server and Db connection

```

```
# create password for mariadb

```
sudo mariadb -u root
CREATE USER 'nglthu'@'localhost' IDENTIFIED BY 'Vbb21dec';
```

# Service active
```
service mariadb start
```