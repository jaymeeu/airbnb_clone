import './App.css';
import Home from './pages/Home';
import $ from 'jquery';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $('#badge_cont').addClass('addShadow');
    } else {
      $('#badge_cont').removeClass('addShadow');
    }
  });
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
