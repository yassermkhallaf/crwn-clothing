import React from "react";
import Directory from "../../componets/directory/directory.component";

import "./homepage.styles.scss";
const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
export default HomePage;
