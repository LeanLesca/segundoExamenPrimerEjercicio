import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaEmpleados from './components/ListaEmpleados';
import Loggin from './components/Loggin'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="p-3 mb-2 bg-info text-black">
      <BrowserRouter>
        <Routes>
        <Route path="/" Component={Loggin} />
        <Route path="/ListaEmpleados" Component={ListaEmpleados} />
        </Routes>
      </BrowserRouter>
      <div className="p-5 mb-2 bg-info text-dark" ></div>
      <div className="p-5 mb-2 bg-info text-dark" ></div>
      <div className="p-5 mb-2 bg-info text-dark" ></div>
    </div>
  );
}



