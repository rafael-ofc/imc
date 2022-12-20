import { useState } from "react"
import { Area, SL, SR } from "./style"
import { Level, LevelType } from "../../assets/ts/imc";
import { Modal } from "../Modal";

export const Content = () => {
    let [Altura, setAltura] = useState<number>(0);
    let [Peso, setPeso] = useState<number>(0);
    let [ValueImc, SetImc] = useState<number>(0);
    let [Active, setActive] = useState<null | LevelType>(null);

    const calc = () => {
        if (Altura && Peso) {
            let valor = Peso / (Altura * Altura)
            SetImc(valor)
            let check: number = Level.findIndex((item) => valor >= item.imc[0] && valor < item.imc[1] ? true : false)
            setActive(Level[check])
        } else {
            alert('Preencha todos os campos')
        }
    }

    return (
        <Area>
            <SL>
                <h1>Calcule seu IMC</h1>
                <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>
                <input type="number"
                    placeholder="Digite a sua Altura"
                    onChange={(e) => setAltura(parseFloat(e.target.value))} />
                <input type="number"
                    placeholder="Digite o seu Peso"
                    onChange={(e) => setPeso(parseFloat(e.target.value))} />
                <button onClick={calc} className="btn">Calcular</button>
            </SL>
            <section>
                {!Active &&
                    <SR>
                        {Level.map((item, index) => (
                            <Modal color={item.color} icone={item.icon} title={item.title} imc1={item.imc[0]} imc2={item.imc[1]} key={index}></Modal>
                        ))}
                    </SR>}
                {Active && <SR className="df">
                    <Modal color={Active.color} icone={Active.icon} title={Active.title} imc1={Active.imc[0]} imc2={Active.imc[1]} imc={ValueImc.toFixed(2)}></Modal>
                </SR>}
            </section>
        </Area>
    )
}