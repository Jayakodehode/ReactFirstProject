import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((count) => count + 1);
    console.log(count);
  }

  return <button onClick={Increment}>value :{count} </button>;
}

export function Searchfield() {
  const [text, setText] = useState("");

  function Inputtext(event) {
    setText(event.target.value);
  }

  return (
    <>
      <input type="text" name="" id="" value={text} onChange={Inputtext} />
      <p>{text}</p>
    </>
  );
}
