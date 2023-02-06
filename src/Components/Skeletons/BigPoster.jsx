import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={450}
    viewBox="0 0 300 450"
    backgroundColor="#313131"
    foregroundColor="#525252"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="450" />
  </ContentLoader>
);

export default MyLoader;
