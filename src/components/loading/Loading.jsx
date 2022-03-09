import React from "react";
import "./loading.scss";

import ReactLoading from "react-loading";

const Loading = () => {

  return (
    <section id="load">
      <ReactLoading
        className="loading"
        type="spinningBubbles"
        color="#64ffda"
        width="90px"
        height="90px"
      />
    </section>
  );
};

export default Loading;
