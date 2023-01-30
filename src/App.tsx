import { useState } from "react"
import { AppCss } from "./App.style"
import { Container } from "./components/Container"
import { ListItem } from "./components/ListItem"
import { ItemType } from "./services/types"

export default () => {
  let [data, setData] = useState<ItemType[]>([
    { id: 0, text: 'Comprar pão', done: false },
    { id: 1, text: 'Fazer Cafe', done: true }
  ])
  let [text, setText] = useState('')

  const handle = () => {
    if (text.trim() == '') return
    let i = data.findIndex((i) => i.text == text.trim())
    if (i == -1) {
      setText('')
      let newArray = [...data]
      newArray.push({
        id: newArray.length,
        text: text.trim(),
        done: false
      })
      setData(newArray)
    }
  }

  return (
    <Container>
      <AppCss>
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
        <nav>
          <div onClick={handle}>+</div>
          <input
            type="text"
            placeholder="Adicione uma Tarefa"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={e => e.code == 'Enter' ? handle() : null}
          />
        </nav>
        {data.map((i, k) => <ListItem key={k} data={i} body={data} state={setData} />)}
      </AppCss>
    </Container>
  )
}