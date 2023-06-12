import { useState } from "react"

function Home() {
  return (
    <div>
      <h4>Home</h4>
      <div>
        <Contador />
      </div>
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  function resetContador() {
    setContador(1);
  }

  return (
    <div>
      <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
      </div>
      <div>
        <button onClick={resetContador}>Resetar</button>
      </div>
    </div>
  )
}

export default Home