import mysql from "mysql"

export const db = mysql.createConnection({
    host: "mysql://db-sql-devops:3306",
    user: "root",
    password: "root",
    database: "devopstable"
})