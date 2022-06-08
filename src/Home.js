//type sfc to get Stateless Function Component

import { useState } from "react";

const Home = function () {
  //let name = "mario";

  //useState - HOOKS
  const [name, setName] = useState("wario");
  const [age, setAge] = useState(25);

  const handleClick = function (e) {
    setName("luigi");
    setAge(38);

    console.log("Hello Ninja!", e);
  };

  const handleClickAgain = function (name, e) {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click Me</button>
      <button
        onClick={function (e) {
          handleClickAgain("max", e);
        }}
      >
        click Me aGAIN
      </button>
    </div>
  );
};

export default Home;
