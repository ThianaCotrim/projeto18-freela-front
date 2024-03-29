import axios from "axios"
import { styled } from "styled-components"
import { useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';


export default function Passagens(){

    const location = useLocation();
    const cidadeSelecionada = new URLSearchParams(location.search).get('cidade');
  

    const [passagens, setPassagens] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const url = "http://localhost:5000/passagens"
        
    
        const promisse = axios.get(url)
    
        promisse.then((res) => {
            setPassagens(res.data)
            console.log(res.data)
        })
        promisse.catch((err) => {
            console.log(err.response.data)
        })}, [])

        function entrar (){

            navigate('/Hoteis')
        }
    return (
        <>
        <Header>
        <h1>Obaaa! Vamos para {cidadeSelecionada}. Quando vc quer ir? </h1>
      </Header>
       <ListContainer onClick={entrar}>
       {passagens.map((r) => (
       <PassagemContainer key={r.id}>
           <h1>{r.nomeDaCompanhia}</h1>
           <img src={r.imagem} alt="poster"/>
           <ul>
            <li>Data: {r.data}</li>
            <li>Previsão de Saída: {r.horarioSaida}</li>
            <li>Previsão de Chegada: {r.horarioChegada}</li>
            <li>R$ {r.preco}</li>
            <li>Origem: {r.localDeOrigem}</li>
           </ul>
           
       </PassagemContainer>
       ))}
       {/* <Link to="/" className="button">Voltar</Link> */}
       </ListContainer>
       </>
    )
}

const Header = styled.header`
background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`

const ListContainer = styled.div`
background-color: black;
    
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`

const PassagemContainer = styled.div`
background-color: yellow;
    height: 400px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    img {
        width: 300px;
        height: 190px;
    }
`