import React, { useState } from 'react'
import { saveHistory } from '../utils/history'

export default function CalculatorTemplate({ opName, opSymbol, operate }) {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState(null)

  function handleCalc(e) {
    e.preventDefault()
    const n1 = parseFloat(a)
    const n2 = parseFloat(b)
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Enter valid numbers')
      return
    }
    const res = operate(n1, n2)
    setResult(res)
    saveHistory({ op: opName, expression: `${n1} ${opSymbol} ${n2} = ${res}`, ts: Date.now() })
  }

  return (
    <div className="calc-page">
      <h2>{opName}</h2>
      <form onSubmit={handleCalc}>
        <input type="number" value={a} onChange={e => setA(e.target.value)} placeholder="Enter number 1" />
        <div className="symbol">{opSymbol}</div>
        <input type="number" value={b} onChange={e => setB(e.target.value)} placeholder="Enter number 2" />

        <button type="submit">Calculate</button>
        <h3 className="result">Result: {result !== null ? result : '--'}</h3>
      </form>
    </div>
  )
}
