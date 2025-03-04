import './App.css'
import Card from './components/card/Card'
import Header from './features/header/header'


function App() {

  return (
    <>
    <header>
      <Header /> 
    </header>
    <div className='app-body'>
          <Card /> 
    </div>
    </>
  )
}

export default App
