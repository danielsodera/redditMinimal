import './App.css'
import Card from './components/card/Card'

function App() {

  return (
    <>
    <header>
      <h1>Reddit<strong>Minimal</strong></h1>
      <img className='hamburger-btn' src='../src/assets/Hamburger_icon.png' alt='sub-reddit menu button' />
    </header>
    <div className='app-body'>
      <div className='card-container'>
          <Card /> 
      </div>
    </div>
    </>
  )
}

export default App
