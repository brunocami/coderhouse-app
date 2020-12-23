import React from "react"
import Header from "./Components/header"
import Footer from "./Components/footer"
import Main from "./Components/main"
import NavBar from "./Components/navBar"

const App = () => {
  return (
    <>
      <NavBar/>
      <Header saludo="Buen dia!"/>
      <Main/>
      <Footer/>
    </>
  )
}
export default App;
