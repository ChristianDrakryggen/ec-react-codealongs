import Person from "./components/Person";

function App() {
  const city = "Malmö";

  const greeting1 = "Hello there";

  const person1 = {
    firstname: "Christian",
    lastname: "Johannesson",
    hobby: "Videogames",
  };

  const person2 = {
    firstname: "Carl",
    lastname: "Johannesson",
    hobby: "Music",
  };

  const person3 = {
    firstname: "Hans",
    lastname: "Johannesson",
    hobby: "Physics",
  };

  return (
    <>
      <h1>Hello world</h1>
      <p>From {city}</p>
      <hr />
      <Person greeting={greeting1} person={person1} />
      <Person greeting="Hi my friend" person={person2} />
      <Person greeting="Hejsan svejsan" person={person3} />
    </>
  );
}

export default App;
