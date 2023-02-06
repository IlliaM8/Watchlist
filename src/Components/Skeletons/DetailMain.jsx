import React from "react";
import ContentLoader from "react-content-loader";

const DetailMain = (props) => (
  <ContentLoader
    speed={2}
    width={600}
    height={400}
    viewBox="0 0 600 400"
    backgroundColor="#313131"
    foregroundColor="#525252"
    {...props}
  >
    <rect x="0" y="100" rx="0" ry="0" width="400" height="130" />
    <rect x="0" y="290" rx="0" ry="0" width="81" height="95" />
    <rect x="179" y="307" rx="0" ry="0" width="200" height="60" />
    <rect x="0" y="0" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="30" rx="0" ry="0" width="350" height="15" />
  </ContentLoader>
);

export default DetailMain;
