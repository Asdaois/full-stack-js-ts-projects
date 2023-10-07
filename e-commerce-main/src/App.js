import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/Header.component";
import Authentication from "./pages/authentication/Authentication.component";
import Checkout from "./pages/checkout/Checkout.component";
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import "./tailwind.css";

function App(props) {
  const { currentUser } = props;

  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="px-16 py-5 font-open-condense">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route
          exact
          path={"/signin"}
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
