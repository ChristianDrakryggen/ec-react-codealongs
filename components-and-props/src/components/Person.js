import Hobby from "./Hobby";

const Person = (props) => {
  const { greeting } = props;
  const { firstname, lastname, hobby } = props.person;

  console.log(props);

  /*const person = {
    name: "Christian",
    age: 31,
  };*/

  return (
    <>
      <p>{greeting}</p>
      <p>
        My name is {firstname} {lastname}
      </p>
      <Hobby hobby={hobby} />
      <hr />
    </>
  );
};

export default Person;
