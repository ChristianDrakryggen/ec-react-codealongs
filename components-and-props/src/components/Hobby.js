const Hobby = (props) => {
  console.log(props);

  const returnHobby = () => {
    return props.hobby;
  };

  const alertHobby = (hobby) => {
    alert(hobby);
  };

  const alertHello = () => {
    alert("Hello");
  };

  return (
    <>
      <p>I like {returnHobby().toLowerCase()}</p>
      <button onClick={() => alertHobby(props.hobby)}>Alert hobby</button>
      <button onClick={alertHello}>Alert Hello</button>
    </>
  );
};

export default Hobby;
