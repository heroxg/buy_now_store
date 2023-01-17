import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/products/ProductDetails';
import Cart from './pages/cart/Cart';
import './Responsive.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Home />
        </Route>
        {/* <Route path="/products/catergory/:category">
          <Home />
        </Route> */}
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
