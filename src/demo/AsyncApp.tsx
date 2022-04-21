import React from 'react'

function AsyncApp() {
  const [counter, setCounter] = React.useState(0);

  // data-testid : 用于从测试文件中选择这些元素。
  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => {
        setTimeout(() => {
          setCounter(counter + 1)
        }, 0)
      }}>+</button>
      <button
        disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </>
  );
}

export default AsyncApp