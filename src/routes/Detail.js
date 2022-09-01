import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

export const DetailPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const currentState = useSelector((state) => state);
  //console.log(param, currentState);
  const onClickBackBtn = () => navigate(-1);
  const onClickHomeBtn = () => navigate("/");
  const todo = currentState.find((item) => item.id === parseInt(param.id));
  const others = currentState.filter((todo) => todo.id !== parseInt(param.id));
  //console.log(todo);
  return (
    <>
      <h1>Detail of {todo.text}</h1>
      <b>자세한 설명은 생략한다.</b>
      <h2>Others</h2>
      <ul>
        {others.map((todo) => (
          <Link key={todo.id} to={`/${todo.id}`}>
            <li>{todo.text}</li>
          </Link>
        ))}
      </ul>
      <button onClick={onClickBackBtn}> Go Back</button>
      <button onClick={onClickHomeBtn}> Go Home</button>
    </>
  );
};
