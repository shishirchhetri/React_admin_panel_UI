//@material-ui/core
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'

function App() {

  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className='other'>other</div>
      </div>
    </>
  )
}

export default App
