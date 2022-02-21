import React ,{useState} from 'react'
import Header from './components/Header'
import Inputcomp from './components/Inputcomp'
import Pokelist from './components/Pokelist'
import { mainContext } from './context'

const App = () => {
  const [methods,setMethod] = useState({});

  const addMethod=(item)=>{
    setMethod({...methods,...item})
  }

  const data ={
    addMethod,
    ...methods
  }
  return (
    <>
      <mainContext.Provider value={data}>
        <Header/>
        <Inputcomp/>
        <Pokelist/>
      </mainContext.Provider>
    </>
  )
}

export default App