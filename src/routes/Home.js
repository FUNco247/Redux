import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
  const btnOnClick = (event) => {
    const targetId = parseInt(event.target.parentNode.id);
    dispatch({ type: "DELETE", id: targetId });
  };
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {currentState.map((state) => (
          <li key={state.id} id={state.id}>
            <Link to={`${state.id}`}>{state.text}</Link>
            <button onClick={btnOnClick}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
