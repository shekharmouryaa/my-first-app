import React, { useState, useEffect } from 'react';

export function HOCMain() {
  return (
    <div>
      <MyComponentWithLoading />
    </div>
  );
}

const HOC = (PropComponent) => {

  return function Loading(props) {
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
      setTimeout(()=>{
          setIsLoading(true)
      },5000)
    },[])

      return (isLoading ?<PropComponent {...props} /> : <div>Loading...</div>)

  };
};


const MyComponent = (props) => {
  return <div>Component That I want to render atfer 5 seconds</div>;
};

const MyComponentWithLoading = HOC(MyComponent);




