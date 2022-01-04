import ChildTwo from "./ChildTwo";

const ChildOne = (props) => {
  return (
    <>
      <h1>Child One</h1>
      <p>{props.message}</p>
      <hr />
      <ChildTwo message={props.message} />
    </>
  );
};

export default ChildOne;
