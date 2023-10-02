const Author = require("./Author");

const vinicius = new Author("Vinicius");

const post = vinicius.writePost("Titulo do post", "Lorem ipsum dolor sic...");

post.addComment("Raissa", "Muito bom");
post.addComment("Lucas", "Achei horrivel");


console.log(post);
