import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  return (
    <div className="flex px-2 justify-center">
      <button
        onClick={handleAdd}
        className="border rounded-2xl text-2xl bg-cyan-300 p-6 m-6"
      >
        Add
      </button>

      <div className="p-6 m-6 text-2xl">{count}</div>

      <button
        onClick={handleSub}
        className="border rounded-2xl text-2xl bg-cyan-300 p-6 m-6"
      >
        Sub
      </button>
    </div>
  );
}

export default App;
