

import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColeçaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuform";
export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();

    const { exibirTabela, exibirFormulario, tabelaVisivel, formularioVisivel } = useTabelaOuForm()

    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

    useEffect(obterTodos, [])

        function obterTodos(){
        repo.obterTodos().then(clientes => {
            setClientes(clientes)


            exibirTabela()
        })
        }

    function selecionarCliente(cliente: Cliente){
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return{
        tabelaVisivel,
        exibirTabela,
        exibirFormulario,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes
    }
}