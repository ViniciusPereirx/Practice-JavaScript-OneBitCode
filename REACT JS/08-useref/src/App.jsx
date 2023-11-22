import { useRef, useState } from "react";
import { RefExample } from "./RefExample";

function App() {
  let number = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValues = () => {
    alert(`Número: ${number}\nRef: ${ref.current}\nState: ${state}`);
  };

  return (
    <>
      <h2> Exemplo useRef com o DOM</h2>
      <RefExample />
      <h1>teste</h1>
      <p>Variável: {number}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>

      <button onClick={() => number++}>Aumentar Número</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState((state) => state + 1)}>
        Aumentar State
      </button>
      <button onClick={showValues}>Exibir valores</button>
    </>
  );
}

export default App;
