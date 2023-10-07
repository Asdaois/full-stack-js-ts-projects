import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/MenuItem.component";

function Directory({ sections }) {
  return (
    <div className="flex flex-wrap justify-between w-full">
      {sections.map(({ id, ...section }) => {
        return <MenuItem key={id} {...section} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
