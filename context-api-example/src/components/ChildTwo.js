import ChildThree from "./ChildThree";
import { useContext } from "react";
import {BasketContext} from "../context/basketContext"

const ChildTwo = (props) => {

    const {basket} = useContext(BasketContext)

  return (
    <>
      <h2>Child Two</h2>
      <p>I don't need the message state</p>
      <p>But I can use the basket state easily</p>
      <p>Items in cart: {basket.length}</p>
      <hr />
      <ChildThree message={props.message} />
    </>
  );
};

export default ChildTwo;
