import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionComponent from "./Collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionComponent);

export default CollectionPageContainer;