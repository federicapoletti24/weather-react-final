import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
  
  <div className="App">
    <div className="container">
      <div className="weather-app">
        <Form />
        <Temperature defaultCity="Paris"/>
        <Forecast />
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
