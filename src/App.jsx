import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const requestAdvice = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data;

      console.log(data.slip.advice);

      setAdvice(data.slip.advice);
    };

    requestAdvice();
  }, []);

  return (
    <div>
      <h1 className=" text-lime-500">Hello World</h1>
      <p className=""> {advice} </p>
    </div>
  );
}

export default App;
