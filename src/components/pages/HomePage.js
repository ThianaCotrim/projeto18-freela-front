import axios from "axios"
import { styled } from "styled-components"
import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"


export default function HomePage(){

    const [cidades, setCidades] = useState([])

    const navigate = useNavigate()
    

    useEffect(() => {

    const url = "http://localhost:5000/cidades"
    

    const promisse = axios.get(url)

    promisse.then((res) => {
        setCidades(res.data)
        console.log(res.data)
    })
    promisse.catch((err) => {
        console.log(err.response.data)
    })}, [])

    function entrar (){
        navigate('/Passagens')
       
    }


    console.log(cidades)

    return (
        <>
        <Header>
        <h1>Olá, Visitante! Pra onde quer viajar?</h1>
      </Header>
        <ListContainer onClick={entrar}>
        {cidades.map((r) => (
        <CidadeContainer key={r.id}>
            <h1>{r.nomeCidade}</h1>
            <img src={r.imagem} alt="poster"/>
            
        </CidadeContainer>
        ))}
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

const CidadeContainer = styled.div`
background-color: yellow;
    height: 300px;
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