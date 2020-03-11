// Seeding for database Collection
const mongoose = require("mongoose");
const db = require("../models");

//  This file empties the Books collection and inserts the books below

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const bookSeed = [
  {
    title: "The Hunger Games",
    link: "http://books.google.com/books?id=_zSzAwAAQBAJ&dq=hunger+game&hl=&source=gbs_api",
    authors: "Suzanne Collins",
    image: "http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description: "First in the ground-breaking HUNGER GAMES trilogy, this new foiled edition of THE HUNGER GAMES is available for a limited period of time. Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });