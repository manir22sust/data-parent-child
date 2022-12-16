import { useState } from "react";

// const App = () => {
//   // const greeting = "Welcome to React";
//   // const greetingObject = { greeting: "Welcome to react" };

//   const [greeting, setGreeting] = useState("Welcome to React");
//   const [isShow, setShow] = useState(true);

//   const handleToggle = () => {
//     setShow(!isShow);
//   };

//   const handleChange = (event) => {
//     setGreeting(event.target.value);
//   };
//   return (
//     <div>
//       <Button label="Toggle" onClick={handleToggle} />
//       <input type="text" value={greeting} onChange={handleChange} />
//       {isShow ? <Welcome text={greeting} /> : null}
//     </div>
//   );
// };

// const Button = ({ label, onClick }) => {
//   return (
//     <button onClick={onClick} type="button">
//       {label}
//     </button>
//   );
// };

// const Welcome = ({ text }) => {
//   return <h1 style={{ color: "red" }}> {text} </h1>;
// };
// export default App;

// const App = () => {
//   const greeting = {
//     title: "React",
//     description: "Your component library for ...",
//   };
//   return (
//     <div>
//       <Welcome text={greeting} />
//     </div>
//   );
// };
// const Welcome = ({ text }) => {
//   return (
//     <div>
//       <Headline title={`Welcome to ${text.title}`} />
//       <Description paragraph={text.description} />
//       <Description1 paragraph1={`para1 ${text.title}`} />
//       <Description2 paragraph2={`para2 ${text.description}`} />
//     </div>
//   );
// };
// const Headline = ({ title }) => <h1> {title} </h1>;
// const Description = ({ paragraph }) => <p> {paragraph} </p>;
// const Description1 = ({ paragraph1 }) => <p> {paragraph1} </p>;
// const Description2 = ({ paragraph2 }) => <p> {paragraph2} </p>;
// export default App;

const App = () => {
  const title = "React";
  const description = "Your component library for ...";

  return (
    <div>
      <Welcome title={title} description={description} />
    </div>
  );
};

const Welcome = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "400px",
        width: "400px",
        margin: "40px",
        borderRadius: "10px",
      }}
    >
      <Message {...props} />
    </div>
  );
};

const Message = ({ title, description }) => {
  const write = "the first blog";
  const post = "the working ";
  return (
    <>
      <h1>{title} </h1>
      <p> {description} </p>
      <Sap wr={write} po={post} />
    </>
  );
};

const Sap = (props) => {
  const frist = "React best";
  const sceond = " library for ...";
  return (
    <div>
      <h1> {props.wr} </h1>
      <p>{props.po} </p>
      <Mon one={frist} two={sceond} />
    </div>
  );
};

const Mon = (props) => {
  return (
    <div>
      <h1>{props.one} </h1>
      <p>{props.two}</p>
    </div>
  );
};
export default App;
