//type sfc to get Stateless Function Component
const Home = () => {
  const handleClick = function (e) {
    console.log("Hello Ninja!", e);
  };

  const handleClickAgain = function (name, e) {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
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
