import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles.scss'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Example } from './pages/Examples';

function App() {
  return (
    <>
       <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/examples" element={ <Example/> } />
            <Route path="/todo-list" element={ <Example/> } />
            <Route path="/crud" element={ <Example/> } />
            <Route path="*" element={ <Home/> } />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
