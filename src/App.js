import './App.css';
import Form from "./Form";
import Header from "./Header";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (<div className="App">
      <div className="weather-app">
        <h1>Hello</h1>
        <Form />
        <Header />
        <Temperature />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
