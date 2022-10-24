import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimalList from './components/AnimalList';
import AddAnimals from './components/AddAnimals';
import EditAnimals from './components/EditAnimal';

function App() {
  return (
    <div className="App">


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">My CRUD for Basto's test</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="add">Add Animals</a>
          </li>
        </ul>
      </div>
    </div>
</nav>

{/* //----mis rutas-----// */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AnimalList />} exact></Route>
          <Route path='/add' element={<AddAnimals /> }></Route>
          <Route path='/edit/:idSenasa' element={<EditAnimals />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
