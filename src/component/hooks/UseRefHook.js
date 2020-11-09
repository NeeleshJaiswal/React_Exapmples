import React, { useRef } from "react";

export const UseRefHook = () => {
  const textInput = useRef(null);
  const divInput = useRef(null);

  function handleClick() {
    console.log('textInput', textInput);
    divInput.current.id = 'id1'
    divInput.current.className = 'c2 classssss'
    console.log('divInput', divInput);
    textInput.current.focus();
  }

  return (
    <div className={"c1"} ref={divInput}>
      <input type="text" ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
      
    </div>

    //React.createElement('div', {className: 'c2', id: 'c3'}, React.createElement('h3',null,'Neel'))
  );
};
