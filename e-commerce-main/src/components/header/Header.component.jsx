import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CardIcon from "../card-icon/CardIcon.component";
import CardDropdown from "../card/CardDropdown.component";
import Option from "./Option.component";

function Header({ currentUser, hidden, signOutStart }) {

  return (
    <div className="flex justify-between w-full h-20 mb-6 header relative">
      <Link to="/" className="w-16 h-full p-6 logo-container">
        <Logo className="relative block m-auto logo" />
      </Link>
      <div className="flex items-center justify-end w-1/2 h-full font-thin tracking-wider options">
        <Option to={"/shop"} name="SHOP" />
        <Option to={"/shop"} name="CONTACT" />
        {DecideSignAction(currentUser, signOutStart)}
        <CardIcon />
      </div>
      {!hidden && <CardDropdown />}
    </div>
  );
}
function DecideSignAction(currentUser = {}, signOut) {
  if (!!currentUser) {
    return <Option onClick={signOut} name="SIGN OUT" />;
  }
  return <Option to="/signin" name="SIGN IN" />;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
