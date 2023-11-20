import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form>
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
        <div>
          <h3>vinicius@gmail.com</h3>
          <span>30/12/1998</span>
          <p>Comentários...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
