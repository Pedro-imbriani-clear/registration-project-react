import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?:(cliente:Cliente) => void
    cancelado?:() => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                    texto='Codigo'
                    valor={id}
                />
            ) : false}
            <Entrada
                texto='nome'
                valor={nome}
                valorMudou={setNome}
                className='mb-4'
            />
            <Entrada
                texto='Idade'
                tipo='number'
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue " className="mr-2"
                onclick={() => props.clienteMudou?.(new Cliente(nome,idade,id))}>
                    {id? 'alterar' : 'salvar'}
                </Botao>
                <Botao onclick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )

}