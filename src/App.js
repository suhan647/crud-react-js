import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    
  <div className='main'>
    <h2 className='main-header' style={{marginBottom: '50px',color:'gray',textDecoration:'underline'}}>
    React Crud Operations
    </h2>
  
  <BrowserRouter>
  <Routes>

    <Route index element={ <Create />}></Route>
    <Route path='/read' element={<Read/>}></Route>
    <Route path='/update' element={<Update/>}></Route>

  </Routes>
  </BrowserRouter>
  </div>
  
  
    </>
  );
}

export default App;


