import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Navbar';
import Hero from './Banner';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App
