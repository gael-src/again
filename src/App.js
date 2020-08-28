import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Socks from "./components/shop-pages/Socks";
import "./App.css";
function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				{/* <Switch> */}
					{/* LAST ELEMENT BECAUSE OF / OR USE "EXACT" ATTRIBUTE */}
					<Route path="/" exact component={Home} />
					{/* <Home /> */}
					<Route path="/shop" component={Shop} />
					<Route path="/shop/socks" component={Socks} />
					{/* <Shop /> */}
					<Route path="/about" component={About} />
					{/* <About /> */}
				{/* </Switch> */}
			</div>
		</Router>
	);
}
export default App;
