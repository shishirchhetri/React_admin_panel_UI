//@material-ui/core
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'

function App() {

  return (
    <div className='app'>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className='other'>
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default App
