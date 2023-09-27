import { useState } from 'react'

const counter = ({iniciador=2}) => {
    const [contador, setcontador] = useState(iniciador)
  

  return (
    
    <div style={{display:'flex',gap:'5px', marginBottom:'5px'}}>
    <button onClick={() => setcontador(contador - 2)}>-</button>

    <h2>{contador}</h2>
    <button onClick={() => setcontador(contador + 2)}>+</button>
    </div>
  )
}

export default counter