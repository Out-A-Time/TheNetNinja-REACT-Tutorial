import "./App.css";

function App() {
  const title = "Welcome to the New Blog";
  const likes = 50;
  //const person = { name: "Max", age: 37 };
  const link = "http://www.duckduckgo.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked: {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"hi, hello, welcome"}</p>
        <p>{[1, 2, 3]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Use Duckduck Go!</a>
      </div>
    </div>
  );
}

export default App;
