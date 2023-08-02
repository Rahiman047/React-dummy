import "./App.css";
import RenderPerson from "./RenderPerson";

const nameObj = [
  { name: "Rahiman", age: 22, message: "Hello there" },
  { name: "Abdur", age: 25, message: "welcome to the world" },
];

// const namesList = ["Rahiman", "Abdur", "Shaik"];

function App() {
  // const handleButtonClicked = () => {
  //   alert("button clicked");
  // };

  // const handleChangeHappened = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  // };

  const handleSubmitEventClicked = (e) => {
    e.preventDefault();
    console.log("Handle Submit Button Clicked");
  };

  return (
    <div>
      <form onSubmit={handleSubmitEventClicked}>
        <h1>Form Placed</h1>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <>
          <button type="submit">Click</button>
        </>
      </form>
      <h1>Names List</h1>
      {nameObj.map((eachItem) => {
        return <RenderPerson eachItem={eachItem} key={eachItem.name} />;
      })}
    </div>
  );
}

export default App;
