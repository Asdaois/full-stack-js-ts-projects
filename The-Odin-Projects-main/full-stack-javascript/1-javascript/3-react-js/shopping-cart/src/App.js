import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'routes/Home';
import Shop from 'routes/Shop';
import ShopList from 'routes/ShopList';

import Nav from 'components/Nav';
import useInventory from 'customHooks/useInventory';

export default function App() {
  const inventory = useInventory();

  return (
    <Router>
      <header>
        <h1>Fantasy shop pets</h1>
        <Nav></Nav>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" exact>
          <Shop {...inventory.set} />
        </Route>
        <Route
          path="/shop-list"
          render={() => <ShopList {...inventory.get} />}
          exact
        />
      </Switch>
    </Router>
  );
}
