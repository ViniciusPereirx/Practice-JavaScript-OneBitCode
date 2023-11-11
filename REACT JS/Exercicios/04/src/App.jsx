import { useState } from "react";
import { Input } from "./components/Input";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar!");
  const [customSize, setCustomSize] = useState(10);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 10;

  const generate = () => {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";

    if (customSize === "") {
      alert("Informe um valor para gerar senhas");
    } else {
      for (let i = 0; i < customSize; i++) {
        const position = Math.floor(Math.random() * characters.length);
        newPassword += characters[position];
      }

      setPassword(newPassword);
      setCopyText("Copiar!");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  };
  return (
    <>
      <div className="app">
        <h1>Gerador de senhas</h1>
        <div>
          <label htmlFor="showInput" id="showInput">
            Customizar tamanho:
          </label>
          <input
            type="checkbox"
            id="showInput"
            value={showInput}
            onChange={() => setShowInput((currentState) => !currentState)}
          />
        </div>
        {showInput ? (
          <div>
            <label htmlFor="passwordSize">Tamanho: </label>
            <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
          </div>
        ) : null}

        <button onClick={generate}>
          Gerar senha com {passwordSize} caractere(s)!
        </button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <div>{password}</div>
      </div>
    </>
  );
}

export default App;
