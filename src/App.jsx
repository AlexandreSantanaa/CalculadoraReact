import { useState } from 'react'
import './App.css'

function App() {
  const [valor, setValor] = useState('')

  return (
    <div className="container">
      <div className="calculadora">
        <form action="">
          <div className='display'>
            <input type="text" value={valor}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={e => setValor('')}/>
            <input type="button" value="DE" onClick={e => setValor(valor.slice(0, -1))}/>
            <input type="button" value="." onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValor(valor + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="7" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValor(valor + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="4" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValor(valor + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="1" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="." onClick={e => setValor(valor + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="00" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="=" className='igual' onClick={e => setValor(eval(valor))} />
          
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
