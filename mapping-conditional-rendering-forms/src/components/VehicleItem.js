const VehicleItem = (props) => {
  const { name, color } = props.vehicle;
  const { type } = props;

  const getHeaderStyle = () => {
    return {
      color: "black",
      fontSize: "25px",
    };
  };

  return (
    <div
      style={{
        backgroundColor: type === "car" ? "pink" : "yellow",
        color: "white",
        padding: "10px",
        border: "2px solid black",
      }}
    >
      {type === "car" ? <h2>Car</h2> : <h2>Other vehicle</h2>}
      <h3 style={getHeaderStyle()}>{name}</h3>
      <p>{color}</p>
    </div>
  );
};

export default VehicleItem;
