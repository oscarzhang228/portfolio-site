import HalfScreen from "./HalfScreen";
function Hero() {
  const heroLeft = <div className="heroLeft">Hi</div>;
  return (
    <div className="ps-1 container-fluid">
      <div className="row py-0">
        <HalfScreen element={heroLeft} />
        <HalfScreen element={<h1>hello</h1>} />
      </div>
    </div>
  );
}
export default Hero;
