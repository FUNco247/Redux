import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: "ADD", text, id: Date.now() });
  };
  const currentState = useSelector((state) => state);
  //console.log(currentState);
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {currentState.map((state) => (
          <li key={state.id}>{state.text}</li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
