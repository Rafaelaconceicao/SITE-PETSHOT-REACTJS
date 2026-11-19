
import './App.css'
import Folder from './components/Folder'
import Header from './components/Header'
import Clientes from './pages/clientes'

function App() {
  return (
    <div className="app-shell">
      <Folder />
      <main className="app-main">
        <Clientes />
      </main>
      <Header />
    </div>
  )
}

export default App
