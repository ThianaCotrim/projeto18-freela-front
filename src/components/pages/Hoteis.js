import axios from "axios"
import { styled } from "styled-components"
import { useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Hoteis(){

    const [hoteis, setHoteis] = useState([])
    const navigate = useNavigate()
    const [hotelSelecionado, setHotelSelecionado] = useState([])

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

        const entrar = (r) => {
            setHotelSelecionado(r)
            window.location.href = '/HotelX?cidade=' + encodeURIComponent(r);
            // navigate('/HotelX')
        }

    return (
        <> 
        <Header>
        <h1>Ótimo! Já sabemos quando você vai, agora me informe onde quer ficar ?</h1>
      </Header>
       <ListContainer>
       {hoteis.map((r) => (
       <HoteisContainer onClick={() => entrar(r.nomeHotel)} key={r.id}>
           <h1>{r.nomeHotel}</h1>
           <img src={r.imagem} alt="poster"/>
           <ul>
            <li>R$ {r.preco}</li>
           </ul>
           
       </HoteisContainer>
       ))}
         <Link to="/" className="button">Voltar para o início</Link>
         <Link to="/Passagens" className="button">Voltar para página anterior</Link>
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
    
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`

const HoteisContainer = styled.div`
background-color: white;
    height: 350px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    img {
        width: 300px;
        height: 190px;
        border-radius: 20px;
    }
`