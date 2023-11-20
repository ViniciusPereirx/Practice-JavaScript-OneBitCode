import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      email: email,
      content: content,
      createdAt: new Date(),
    };

    setComments((state) => [newComment, ...state]);
    setEmail("");
    setContent("");
  };

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="content">Cometários</label>
        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Enviar comentários</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0
          ? comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.email}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            ))
          : "Nenhum comentário!"}
      </section>
    </div>
  );
}

export default App;
