import React, {useState} from 'react'
import "./app.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";
import Project from "./pages/project"
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
					<Route path="/" component={Home} exact />
					<Route path="/project" component={Project} exact />
        </Switch>
    </Router>
  );
}

export default App;
