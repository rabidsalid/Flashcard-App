const express = require( "express" );
const logger = require("morgan");
const fs = require("fs");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;
const db = require('./db/db_connection');
app.use(logger('dev')); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const get_flashcards_sql = fs.readFileSync(__dirname + "/db/queries/readallfromtable.sql", { encoding: "UTF-8" })

app.get('/', (req, res) => {
  res.send('It works!');
});

app.get('/getcards', (req, res) => {
  db.execute(get_flashcards_sql, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

const modify_flashcard_sql = fs.readFileSync(__dirname + "/db/queries/modifyflashcard.sql", { encoding: "UTF-8" })

app.post('/modifycard', (req, res) => {
  console.log("Modify Card Request: " + req.body);
  db.execute(modify_flashcard_sql, [req.body.question, req.body.answer, req.body.id], (error, results) => {
    if (error) throw error;
  })
});

const remove_flashcard_sql = fs.readFileSync(__dirname + "/db/queries/removeflashcard.sql", { encoding: "UTF-8" })

app.post('/removecard', (req, res) => {
  console.log("Remove Card Request With ID: " + req.body.id);
  db.execute(remove_flashcard_sql, [req.body.id], (error, results) => {
    if (error) throw error;
  })
});

const add_flashcard_sql = fs.readFileSync(__dirname + "/db/queries/addflashcard.sql", { encoding: "UTF-8" })

app.post('/addcard', (req, res) => {
  console.log("Add Card Request");
  db.execute(add_flashcard_sql, [req.body.id, req.body.question, req.body.answer], (error, results) => {
    if (error) throw error;
    res.json(results)
  })
});

app.listen( port, () => {
  console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );