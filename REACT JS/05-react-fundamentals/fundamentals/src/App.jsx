function sum(a, b) {
  return a + b;
}

export default function App() {
  const tech = "React";
  const status = true;

  return (
    <div>
      <h1>{tech}</h1>
      <h2>Soma = {sum(5, 5)}</h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  );
}
