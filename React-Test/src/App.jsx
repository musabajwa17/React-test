import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './pages/SignUp';
import Table from './components/Table';
import Error from './components/Error';
import Cart from './components/Cart';
import VeiwProduct from './components/VeiwProduct';
import NewProduct from './components/NewProduct';
function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/table' element={<Table />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/veiwproduct/:id' element={<VeiwProduct  /> } />
      <Route path='/error' element={<Error />} />
      <Route path='/new' element={<NewProduct />} />
    </Routes>
  )
}

export default App
