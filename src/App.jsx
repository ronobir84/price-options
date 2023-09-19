


import { LineChart } from 'recharts'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phones from './components/Phones/Phones'



function App() {
  

  return (
    <>
    <NavBar></NavBar>
    
      {/* <DaisyNav></DaisyNav>  */}
  
      
      <h1 className='text-4xl bg-red-300 text-center'>Vite + React</h1>
      <PriceOptions> </PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    
     
      
    </>
  )
}

export default App
