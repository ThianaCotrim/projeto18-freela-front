import axios from "axios"
import { styled } from "styled-components"
import { useEffect, useState} from "react"

export default function HotelX(){

    const [hotel, setHotel] = useState([])

    

    useEffect(() => {

        const url = "http://localhost:5000/hotelx/1"
        
    
        const promisse = axios.get(url)
    
        promisse.then((res) => {
            setHotel(res.data)
            console.log(res.data)
        })
        promisse.catch((err) => {
            console.log(err.response.data)
        })}, [])


    return (
       <><Header>
        <h1>Ótimo! Aqui estão mais detalhes do hotel</h1>
      </Header>
       <ListContainer>
       {hotel.map((r) => (
       <HoteisContainer key={r.id}>
           <h1>{r.nomeHotel}</h1>
           {/* <img src={r.imagem} alt="poster"/> */}
           <ul>
            <li>{r.nomeComodidade}</li>
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
    
    
    display: flex;
   
    flex-direction: column;
    
`

const HoteisContainer = styled.div`
background-color: yellow;
    width: 150px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    flex-direction: column;
   
 
  
    margin: 10px;
    img {
        width: 300px;
        height: 190px;
    }
`