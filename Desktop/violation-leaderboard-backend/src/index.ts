// ---------- TO DO ----------
//      1. safely commit to github for nicer looking profile
//      2. rename vars, state, functions
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

//USE THIIS WHEN HOSTING ON CLOUD
// var connection = mysql.createConnection({
//     host: 'database-1.c4mt0pqocwpt.us-east-2.rds.amazonaws.com',
//     user: 'leaderboards',
//     password: 'password',
//     database: 'leaderboards_database',
//     port: 3306,
//     multipleStatements: false,
//     connectTimeout: 100000
// })

var connection = mysql.createConnection({
    host: "0.0.0.0",
    user: "root",
    password: "Bogdan200327",
    database: "leaderboards_database",
    port: 3306,
    multipleStatements: false,
    connectTimeout: 10000
})

connection.connect((err)=>{
    if(err){
        console.log("error connecting to db:   ", err)
    }else{
        console.log("sql connected")
    }
});

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json({limit: '10mb'}))

app.get('/attempt', function(req, res){
    console.log("entering attempt path...")
    connection.query("SHOW DATABASES", function(err, result){
        if(err){
            console.log(err);
            console.log("errror in attempt get")
        }else{
            res.send(result);
            console.log(req)
        }
    })
})

app.get('/topten/:database', function(req, res){
    let queryName = req.params.database;
    let query = '';

    if (queryName === "total_fines") {
        query = `SELECT * FROM total_fines_table WHERE is_passenger = true
        ORDER BY total_fines DESC
        LIMIT 10
        `
    }

    if (queryName === "total_fines_srf") {
        query = `select * from total_fines_table where is_vanity = true
        order by total_fines desc
        limit 10`
    }

    if (queryName === "total_fines_table") {
        query = `SELECT * FROM total_fines_table ORDER BY total_fines DESC LIMIT 10`
    }

    if (queryName === "total_fines_omt") {
        query = `SELECT * FROM total_fines_table WHERE is_taxi = true
        ORDER BY total_fines DESC
        LIMIT 10`
    }

    connection.query(query, function(err, result){
        if(err){
            console.log(err)
            console.log("error in top ten fetch")
        }else{
            res.send(result);
            console.log(req);
        }
    })
})

app.get('/license-plate/:plate/:database', (req, res) => {
    const plate = req.params.plate;
    const database = req.params.database;
    let query = '';

if (database === "total_fines") {
    query = `
    select * from (
        SELECT total_fines,
          (SELECT COUNT(*)+1
           FROM total_fines_table
           WHERE total_fines > t.total_fines
           AND is_passenger = true) AS sequence
        FROM total_fines_table t
        WHERE plate = ?
        ) t1 
        join (
        select * from violations where plate = ?
        ) t2 `
}

if (database === "total_fines_srf") {
    query = `
        select * from (
        SELECT total_fines,
          (SELECT COUNT(*)+1
           FROM total_fines_table
           WHERE total_fines > t.total_fines
           AND is_vanity = true) AS sequence
        FROM total_fines_table t
        WHERE plate = ?
        ) t1 
        join (
        select * from violations where plate = ?
        ) t2 `
}

if (database === "total_fines_omt") {
    query = `
    select * from (
        SELECT total_fines,
          (SELECT COUNT(*)+1
           FROM total_fines_table
           WHERE total_fines > t.total_fines
           AND is_taxi = true) AS sequence
        FROM total_fines_table t
        WHERE plate = ?
        ) t1 
        join (
        select * from violations where plate = ?
        ) t2 `
}

if (database === "total_fines_table") {
        query = `
            select * from (
            SELECT total_fines,
              (SELECT COUNT(*)+1
               FROM total_fines_table
               WHERE total_fines > t.total_fines) AS sequence
            FROM total_fines_table t
            WHERE plate = ?
            ) t1 
            join (
            select * from violations where plate = ?
            ) t2 `
    }


    connection.query(query, [plate, plate], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

// app.get('/license-plate/:table', (req, res) => {
//     const table = req.params.table;

//     const query = `SELECT SUM(total_fines) AS allfinestotal FROM ${table}`;

//     connection.query(query, (error, results) => {
//         if (error) throw error;
//         res.send(results);
//     });
// });

app.get("/password/:input", function(req, res){
    const correctPassword = "retardman";
    const userPassword = req.params.input;

    res.json({authenticated: userPassword === correctPassword})
})

app.get("/", function(req, res){
    res.json({running: true});
    console.log(req)
})

const port = process.env.PORT || 8000

app.listen(port, function() {
    console.log("server running on port 8000")
})
