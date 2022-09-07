import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ResultPage from './components/ResultPage';


function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "result" element={<ResultPage />}/>
    </Routes>
    </>
  );
}

export default App;
