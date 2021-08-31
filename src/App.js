import React, {useState} from 'react'
import "./app.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";
import BachelorThesis from "./pages/bachelorThesis"
import OpticalFlow from './pages/opticalFlow';
import AuthorPrediction from './pages/authorPrediction';
import Others from './pages/others';
import ConnectFour from './pages/connectFour';
import LolAPI from './pages/lolAPI';
import Homepage from './pages/hompage';
import Navbar from "./components/Navbar/Index";
import Sidebar from "./components/Sidebar";



function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
			setIsOpen(!isOpen);
	}

  return (
    <Router>
				<Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Switch>
					<Route path="/nicolasmuntwyler" component={Home} exact />
          <Route path="/nicolasmuntwyler/BachelorThesis" component={BachelorThesis} exact />
          <Route path="/nicolasmuntwyler/OpticalFlow" component={OpticalFlow} exact />
          <Route path="/nicolasmuntwyler/AuthorPrediction" component={AuthorPrediction} exact />
          <Route path="/nicolasmuntwyler/Others" component={Others} exact />
          <Route path="/nicolasmuntwyler/ConnectFour" component={ConnectFour} exact />
          <Route path="/nicolasmuntwyler/LolAPI" component={LolAPI} exact />
          <Route path="/nicolasmuntwyler/Homepage" component={Homepage} exact />
        </Switch>
    </Router>
  );
}

export default App;
