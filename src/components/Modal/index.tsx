import { ReactNode } from "react"
import { ModalS } from "./style"

type ModalProps = {
    color: string,
    icone: string,
    title: string,
    imc1: number,
    imc2: number,
    imc?: string,
}

export const Modal = ({ color, icone, title, imc1, imc2, imc }: ModalProps) => {
    return (
        <ModalS style={{ backgroundColor: color }}>
            <i className={`bi ${icone}`}></i>
            <h4>{title}</h4>
            {imc != undefined && <span>{`Seu IMC é de: ${imc} kg/m²`}</span>}
            <p>{`IMC está entre ${imc1} e ${imc2}`}</p>
        </ModalS>
    )
}