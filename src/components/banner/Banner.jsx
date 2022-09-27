import Container from "../Container/Container";

const Banner = ({ banner, className, style, children, backgroundCover }) => {
  return (
    <Container className={className}>
      <img
        src={banner}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
        // style={style}
        style={{
          background: `linear-gradient(0deg, rgba(56, 78, 77, 0.5), rgba(56, 78, 77, 0.5))`
        }}
      />
      {backgroundCover && (
        <div
          className="absolute inset-0 z-[1] h-full"
          style={{
            background: `linear-gradient(0deg, rgba(56, 78, 77, 0.5), rgba(56, 78, 77, 0.5))`
          }}>
          {children}
        </div>
      )}
      <div style={style} className="relative inset-0 z-[2] h-full">
        {children}
      </div>
    </Container>
  );
};
export default Banner;
