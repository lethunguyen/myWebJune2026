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