import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const { tabelaVisivel, exibirTabela, selecionarCliente, excluirCliente, novoCliente, salvarCliente, cliente, clientes } = useClientes()


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-600 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className={'mb-4'} onclick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>

        ) : (

          <Formulario clienteMudou={salvarCliente} cliente={cliente} cancelado={() => exibirTabela()}/>
          
        )}

  
</Layout>

</div>
)
}