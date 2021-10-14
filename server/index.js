const express = require('express');
const port = process.env.PORT || 3000;
let app = express();
let cors = require('cors');

let books = [
    {
        "bookId": "1",
        "bookName": "A Man Thinketh",
        "ISBN": "987654321",
        "publishDate": "March 19, 2021",
        "price": "20",
        "description": "Best seller",
        "imageUrl": "assets/images/A Man Thinketh.jpg"
        },
        {
            "bookId": "2",
            "bookName": "One Arranged Murder",
            "ISBN": "987654321",
            "publishDate": "March 20, 2021",
            "price": "15",
            "description": "Second best seller in the store",
            "imageUrl": "assets/images/OneArrangedMurderjpg.jpg"
        },
        {
            "bookId": "3",
            "bookName": "Pursuit of Happiness",
            "ISBN": "987654321",
            "publishDate": "March 29, 2021",
            "price": "17",
            "description": "Book No. 3 in the book store",
            "imageUrl": "assets/images/PursuitOfHappiness.jpg"
        },
        {
            "bookId": "4",
            "bookName": "The Psychology of Money",
            "ISBN": "987654321",
            "publishDate": "March 17, 2021",
            "price": "21",
            "description": "Book No. 4 in the book store",
            "imageUrl": "assets/images/The Psychology of Money.jpg"
        },
        {
            "bookId": "5",
            "bookName": "The Silent Patient",
            "ISBN": "987654321",
            "publishDate": "March 9, 2021",
            "price": "17.99",
            "description": "Book No. 5 in the book store",
            "imageUrl": "assets/images/The Silent Patient.jpg"
        },
        {
            "bookId": "6",
            "bookName": "Theory of Everything",
            "ISBN": "987654321",
            "publishDate": "March 1, 2021",
            "price": "20.11",
            "description": "Theory of Everything by Stephan Hawking",
            "imageUrl": "assets/images/Theory Of Everything.jpg"
        }
];

app.use(cors());

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req,res)=>{
    let book=books.filter(filteredbook => filteredbook.bookId==req.params.id);
    book = Object.assign(...book);
    res.send(book);
});

app.listen(port, ()=> console.log(`Running at port ${port}`));


//if(!found) res.status(404).send("Message");