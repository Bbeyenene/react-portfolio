
import './App.css';
import home from "./pages/home";
import contact from "./pages/contact";
import portfolio from "./pages/portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={home} exact />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/contact" component={contact} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
