import DefaultGreeting from "./DeafultGreeting";

export const Greeting = () => {
  return (
    <div>
      <h2>My name is Christian</h2>
      <DefaultGreeting />
      <DefaultGreeting />
      <DefaultGreeting />
    </div>
  );
};

export const AnotherGreeting = () => {
  return <h2>My lastname is Johannesson</h2>;
};
