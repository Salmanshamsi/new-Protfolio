import Home from './screens/home'
import About from './screens/About'
import Mywork from './screens/Mywork'
import Contact from './screens/Contact'
import "./App.css"
import Navbar from './components/navbar'


function App() {

  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Mywork/>
        <Contact/>
    </>
  )
}

export default App
