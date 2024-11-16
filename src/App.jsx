import { useState } from 'react'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();

  const [operador, setOperador] = useState();
  const [conta, setConta] = useState();

  function Adicao() {
    setConta(Number(numero1) + Number(numero2));

  }

  function Subtracao() {
    setConta(Number(numero1) - Number(numero2));

  }

  function Multiplicacao() {
    setConta(Number(numero1) * Number(numero2));

  }

  function Divisao() {
    setConta(Number(numero1) / Number(numero2));

  }

  return (
    <>
      <h1>
        Calculadora Online
      </h1>

      <input type='text' name="Numero um" placeholder='Numero um' value={numero1} onChange={(e) => setNumero1(e.target.value)} />

      <input type='text' name="Numero dois" placeholder='Numero dois' value={numero2} onChange={(e) => setNumero2(e.target.value)} />

      <div>
        <h2>
          Operadores
        </h2>

        <button onClick={Adicao}> + </button>
        <button onClick={Subtracao}> - </button>
        <button onClick={Multiplicacao}> * </button>
        <button onClick={Divisao}> / </button>

      </div>


      <p> Resultado: {conta} </p>
    </>
  )
}

export default App
