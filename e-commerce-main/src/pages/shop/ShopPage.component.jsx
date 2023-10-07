import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/Collection.container";


function ShopPage(props) {
  const math = useRouteMatch();

  useEffect(() => {
    const { fetchCollectionsStart } = props;

    fetchCollectionsStart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${math.path}`}>
        <CollectionsOverviewContainer />
      </Route>
      <Route
        path={`${math.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null,mapDispatchToProps)(ShopPage);
