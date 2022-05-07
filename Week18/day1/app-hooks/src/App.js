import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("John");
  //equals to -  ***this.state = {name: 'john'}*** on class component
  const [users, setUsers] = useState([]);
  //equals to -  ***this.state = {users: []]}*** on class component
  //...

  const [txt, setTxt] = useState("");
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setName('Bob')
  // }

  useEffect(() => {
    console.log("componentdidmount equivalent");
  }, []);

  useEffect(() => {
    setTxt("bla bla bla");
    console.log(
      "happens only when *name* state is being updated - equvalent to componentDidUpdate *name*"
    );
  }, [name]);

  return (
    <div className="App">
      <header className="App-header">
        {name}
        <div>
          <button onClick={() => setName("Bob")}>Change Name</button>
        </div>
        <div>
          <p>counter: {counter}</p>
          <button onClick={() => setCounter(counter + 1)}>Count</button>

          {/* also works: */}
          {/* <button onClick={() => setCounter(item => item + 1)}>Count</button> because it asumes *item* is the previous state */}
        </div>
      </header>
    </div>
  );
}

export default App;
