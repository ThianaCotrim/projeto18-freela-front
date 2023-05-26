import HomePage from "./components/pages/HomePage";
import Hoteis from "./components/pages/Hoteis";
import HotelX from "./components/pages/HotelX";
import Passagens from "./components/pages/Passagens";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

export default function App() {
  return (

    <PagesContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/passagens" element={<Passagens/>} />
        <Route path="/hoteis" element={<Hoteis/>} />
        <Route path="/hotelx" element={<HotelX/>} />
      </Routes>
    </BrowserRouter>
  </PagesContainer>
      
   
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
