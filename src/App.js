// First Component But Main Component
// import { Header1, Header2 } from "./Components/Header";
// import Home from "./Components/Home";
// Here props has now become an object....so thats why
// function Hola(props) {
//   return <h1 className={props.nameForClass}>{props.name}</h1>; //On using curly bracket it becomes a variable
// }

// // more better option...use destructuring
// function Hola({ nameForClass, name, language = "default value" }) {
//   // Cannot write JS inside return...if you want write inside {}
//   return (
//     <>
//       <Header1 />
//       <Header2 />

//       <h1 className={nameForClass}>
//         {name}-:{language}
//       </h1>
//       <hr />
//     </>
//   ); //On using curly bracket it becomes a variable
// }
// function App() {
//   // remember.....return is always single component......so how to tags like hr,br....so use empty tags
//   return (
//     <div>
//       <Home />
//       <Hola name={"Hello"} nameForClass={"div1"} language={"English"} />
//       <Hola name={"Konichiva"} nameForClass={"div2"} language={"Japanese"} />
//       <Hola name={"Hola"} nameForClass={"div3"} language={"Spanish"} />
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------------------------------
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
