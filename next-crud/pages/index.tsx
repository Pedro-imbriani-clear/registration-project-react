import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 28, '2'),
    new Cliente('Pedro', 19, '3'),
    new Cliente('Joao', 83, '4')
  ]
  function clienteSelecionado(cliente: Cliente) {

  }
  function clienteExcluido(cliente: Cliente) {

  }
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r  from-blue-500  to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4"
              onclick={()=> setVisivel('form')}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (

          <Formulario 
          cliente={clientes[0]}
          clienteMudou={salvarCliente}
          cancelado={()=> setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  )
}