import "./app.scss";
import Navbar from "./components/Navbar/Index";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
