import './App.css'
import { Navigation } from './Components/Navigation'
import { Contact } from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Components/Title';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './Views/NotFound';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Title />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </ Routes>      
    </>
  )
}

export default App
