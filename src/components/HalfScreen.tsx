interface Props {
  element: React.ReactElement;
}
function HalfScreen({ element }: Props) {
  return <div className="col-md-6 col-lg-6 p-0 fill">{element}</div>;
}

export default HalfScreen;
