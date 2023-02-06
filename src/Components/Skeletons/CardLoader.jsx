import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
  <ContentLoader
    speed={2}
    width={150}
    height={340}
    viewBox="0 0 150 340"
    backgroundColor="#313131"
    foregroundColor="#525252"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="150" height="225" />
    <rect x="0" y="235" rx="2" ry="2" width="150" height="10" />
    <rect x="0" y="255" rx="2" ry="2" width="150" height="10" />
    <rect x="0" y="275" rx="2" ry="2" width="150" height="10" />
    <rect x="0" y="295" rx="2" ry="2" width="150" height="10" />
  </ContentLoader>
);

export default CardLoader;
