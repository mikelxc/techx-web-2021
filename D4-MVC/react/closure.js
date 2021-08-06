const greeting = (props) => {
  return () => console.log(props.name, props.lastname);
};

const hi = greeting("hi");

greeting({
  firstName: "Mike",
  lastName: "Liu",
  intro: "Hello",
});
hi("mike");
hi("Chinat");

const hello = greeting("hello");

hello("world");
