import { useEffect, useState } from "react";
import { People } from "./hooks/People";

const App = () => {
    let [nome, setNome] = useState('')
    let [lista, setLista] = People()

    return (
        <>
            <input type="text" placeholder="Digite um nome" className="form-control"
                onChange={(e) => setNome(e.target.value)} />
            <br /><br />
            <button className="btn btn-primary"
                onClick={() => setLista({ type: 'ADD', name: nome })}>
                Cadastrar</button>
            <button className="btn btn-danger"
                onClick={() => setLista({ type: 'DEL', name: nome })}>
                Remover</button>
            <button className="btn btn-warning"
                onClick={() => setLista({ type: 'ORDER' })}>
                Ordenar</button>
            <ul>
                {lista.map((o, i) => <li key={i}>{o.name}</li>)}
            </ul>
        </>
    )
}

export default App;
