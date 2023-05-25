import axios from "axios"
import { styled } from "styled-components"
import { useEffect, useState} from "react"

export default function Hoteis(){

    const [hoteis, setHoteis] = useState([])

    useEffect(() => {

        const url = "http://localhost:5000/hoteis"
        
    
        const promisse = axios.get(url)
    
        promisse.then((res) => {
            setHoteis(res.data)
            console.log(res.data)
        })
        promisse.catch((err) => {
            console.log(err.response.data)
        })}, [])

    return (
        <> 
        <Header>
        <h1>Ótimo! Já sabemos quando vocẽ vai, agora me informe onde quer ficar ?</h1>
      </Header>
       <ListContainer>
       {hoteis.map((r) => (
       <HoteisContainer key={r.id}>
           <h1>{r.nomeHotel}</h1>
           <img src={r.imagem} alt="poster"/>
           <ul>
            <li>R$ {r.preco}</li>
           </ul>
           
       </HoteisContainer>
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

const HoteisContainer = styled.div`
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