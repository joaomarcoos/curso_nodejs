const createBook = (req,res, connection)=>{

    // res.json(200, {book: req.body});

    const {title, name_author, pages} = req.body;
    const book = {title, name_author, pages};

    const sql = `INSERT INTO books (title, name_author, pages) VALUES ('${title}', '${name_author}, '${pages}')`;

    connection.query(sql, (err)=>{
        if(err) throw err;
        console.log("Book added successfully");
        res.status(201).json({message: "Livro adicionado com sucesso"});
        res.redirect('/');
    })    

    console.log(book);

}

export default{
    createBook,
};