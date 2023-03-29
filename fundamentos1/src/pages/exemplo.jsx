import Cabeçalho from "../components/Cabeçalhos";
import Layout from "../components/Layout";
export default function Exemplo(){
    return(
        <Layout titulo='Usando componentes' >
        <Cabeçalho titulo='next.js & React'/>
        <Cabeçalho titulo='Aprenda next na pratica'/>
        </Layout>
            
    )
}