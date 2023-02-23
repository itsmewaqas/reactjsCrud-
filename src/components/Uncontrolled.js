import React, { useState, useEffect, useRef } from 'react';

function Uncontrolled() {

  const inputRef = useRef(null);

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    // Do something with the value 
  }

  useEffect((props) => {
  }, [])


  return (
    <div className='container'>
      Welcome...
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
      </form>
    </div>
  );
}

export default Uncontrolled;



