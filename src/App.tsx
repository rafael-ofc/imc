import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [cpf, setCpf] = useState('')
  const [tel, setTel] = useState('')
  const [cash, setCash] = useState('')

  let mask = {
    cpf(value: string) {
      value = value.replace(/(\D)/g, '')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2')
      return value.substring(0, 14)
    },
    telefone(value: string) {
      value = value.replace(/(\D)/g, '')
      value = value.replace(/(\d{2})(\d)/, '($1) $2')
      value = value.replace(/(\d{5})(\d{1,4})/, '$1-$2')
      return value.substring(0, 15)
    },
    reais(value: string) {
      value = value.replace(/(\D)/g, '')
      value = value.replace(/(\d)(\d{2})$/, '$1,$2')
      value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      value = value.replace(/([\d\.\,])/, 'R$ $1')
      return value
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Digite seu CPF'
        onChange={e => setCpf(mask.cpf(e.target.value))}
        value={cpf}
      />
      <br /><br />
      <input
        type="text"
        placeholder='Digite seu Telefone'
        onChange={e => setTel(mask.telefone(e.target.value))}
        value={tel}
      />
      <br /><br />
      <input
        type="text"
        placeholder='Digite um Valor'
        onChange={e => setCash(mask.reais(e.target.value))}
        value={cash}
      />
    </div>
  )
}

export default App
