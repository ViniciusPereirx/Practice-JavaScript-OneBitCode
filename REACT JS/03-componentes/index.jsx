function Button() {
  return <button>Meu botão</button>;
}

function Container() {
  return (
    <div className="container">
      <header>
        {" "}
        <h1><Button/></h1>
      </header>
    </div>
  );
}
