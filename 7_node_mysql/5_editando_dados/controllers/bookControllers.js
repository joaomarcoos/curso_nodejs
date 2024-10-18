import connection from "../index.js";

const getAllBooks = async (req,res)=>{

    const sql = 'SELECT * FROM book';
    try{
        const [result] = await connection.promise().query(sql)

        if (result.length === 0) {
            return res.render('getBooks', {data: [], message: 'Livros não encontrados!' });
        }
        res.render('getBooks', {data: result});
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
}

const searchBook = async (req, res) => {
    //res.json({search: req.query})

    const {term} = req.query;
    const searchTerm = term;
    // console.log(searchTerm);

    const sql = `SELECT * FROM book WHERE title LIKE '%${searchTerm}%' OR name_author LIKE '%${searchTerm}%' OR pages_qtd LIKE '%${searchTerm}%'`;

    try{
        const [result] = await connection.promise().query(sql);

        if (result.length === 0) {
            return res.render('getBooks', {data: [], searchTerm, message: 'Livro não encontrado!' });
        }
        res.render('getBooks', {data: result, searchTerm});
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
}

const createBook = async (req, res) => {

    // res.json(200, {book: req.body});

    const { title, name_author, pages_qtd } = req.body;
    const book = { title, name_author, pages_qtd };

    // console.log(book);

    const sql = `INSERT INTO book (title, name_author, pages_qtd) VALUES ('${title}', '${name_author}', ${pages_qtd})`;

    try {

        const [result] = await connection.promise().query(sql, [title, name_author, pages_qtd]);


        if (result.affectedRows > 0) {
            console.log("Book added successfully");
            return res.redirect('/');
        };

        res.status(500).json({ error: "Error while inserting book" });
        return;

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }


}

const getEditBook = async (req, res)=>{
    
    const id = req.params.id;

    const sql = `SELECT * FROM book WHERE id = ${id}`;

    try{
        const [result] = await connection.promise().query(sql);
        const book = result[0];
        // console.log(book)
        res.render('editBook', {book});
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
}

const updateBook = async (req, res) => {

    // console.log(req.body);
    
    const id = req.params.id;
    const { title, name_author, pages_qtd } = req.body;

    const sql = `UPDATE book SET title = '${title}', name_author = '${name_author}', pages_qtd = ${pages_qtd} WHERE id = ${id}`;

    try{
        await connection.promise().query(sql);
        console.log("Book updated successfully");

        const [result] = await connection.promise().query('SELECT * FROM book');
        
        res.render('getBooks', {data: result});
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }

}

const deleteBook = async (req, res) => {
    
    const id = req.params.id;

    // res.json({id});

    const sql = `DELETE FROM book WHERE id = ${id}`;

    try{
        await connection.promise().query(sql);
        console.log("Book deleted successfully");
        
        const [result] = await connection.promise().query('SELECT * FROM book');

        res.render('getBooks', {data: result});
    }catch(err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
}



export default {
    createBook,
    getAllBooks,
    searchBook,
    getEditBook,
    updateBook,
    deleteBook
};