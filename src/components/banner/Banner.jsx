import Container from "../Container/Container";

const Banner = ({banner, className, style}) => {
  return (
    <Container className={className}>
      <img
        src={banner}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
        // style={style}
      />
      <div style={style} className="absolute inset-0 z-[1]"></div>
    </Container>
  );
};
export default Banner;