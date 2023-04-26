const db = require("./db_connection");
const fs = require("fs");

const drop_flashcard_table_sql = fs.readFileSync(__dirname + "/queries/init/dropflashcardtable.sql", { encoding: "UTF-8" })
const create_flashcard_table_sql = fs.readFileSync(__dirname + "/queries/init/createflashcardtable.sql", { encoding: "UTF-8" })
const add_flashcard_sql = fs.readFileSync(__dirname + "/queries/addflashcard.sql", { encoding: "UTF-8" })
const read_all_from_table_sql = fs.readFileSync(__dirname + "/queries/readallfromtable.sql", { encoding: "UTF-8" })

db.execute(drop_flashcard_table_sql);
db.execute(create_flashcard_table_sql);

db.execute(add_flashcard_sql, ['1', 'What is the capital of France?', 'Paris']);
db.execute(add_flashcard_sql, ['2', 'Who is the CEO of Tesla', 'Elon Muske']);

db.execute(read_all_from_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'stuff' initialized with:")
        console.log(results);
    }
);

db.end();