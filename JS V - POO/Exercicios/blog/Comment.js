class Comment {
  constructor(username, comment) {
    this.username = username;
    this.comment = comment;
    this.createAt = new Date();
  }
}
module.exports = Comment;
