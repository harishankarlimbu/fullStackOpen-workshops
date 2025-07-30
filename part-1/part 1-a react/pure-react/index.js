let SayHello = (props) => {
  return React.createElement("h1", { id: "myId" }, `hello ${props.firstName}`);
};

let App = () => {
  return React.createElement(
    "div",
    {},[
React.createElement(SayHello, { firstName: "Ashok" }),
React.createElement(SayHello, { firstName: "Swikar" }),
React.createElement(SayHello, { firstName: "Anish" })

    ]
  );
};

const container = document.getElementById("root");
let root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
