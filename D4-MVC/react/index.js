const Students = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.firstName),
    React.createElement("h2", {}, props.lastName),
    React.createElement("p", {}, props.intro),
    React.createElement("p", null, props.age),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Web Dev!"),
    React.createElement(Students, {
      firstName: "Mike",
      lastName: "Liu",
      intro: "Hello",
    }),
    React.createElement(Students, {
      firstName: "Chinat",
      lastName: "Yu",
      intro: "Hi",
    }),
    React.createElement(Students, {
      firstName: "Tom",
      lastName: "Hu",
      intro: "Hello",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
