import { useState, useEffect } from "react";


function Demo() {
                    const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  
  return (
                    <div className="App">
                      <h1>{counter}</h1>
                      <h2>Start editing to see some magic happen!</h2>
                    </div>
                  );
}

export default Demo
