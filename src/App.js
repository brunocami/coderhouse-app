import React from "react"
import {BrowserRouter} from 'react-router-dom';
import Footer from "./Components/footer"
import Main from "./Components/main"
import NavBar from "./Components/navBar"

const App = () => {

  return (
      <BrowserRouter>
        <NavBar/>
        <Main/>
        <Footer/>
      </BrowserRouter>
  )
}
export default App;