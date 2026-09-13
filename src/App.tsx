import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Navbar';
import Hero from './Banner';
import Footer from './Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </>
  )
}

export default App
