import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../createSLice";

export default function Home() {
  const count = useSelector((s) => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Home Page</h2>
      <p>Counter: <strong>{count}</strong></p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}