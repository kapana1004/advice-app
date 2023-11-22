import { useState, useEffect } from "react";
import axios from "axios";
import dotIcon from "./assets/images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(null);

  const reloadButton = () => {
    window.location.reload();
  };

  useEffect(() => {
    const requestAdvice = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data;

      console.log(data.slip.advice);

      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
    };

    requestAdvice();
  }, []);

  return (
    <div className=" flex justify-center items-center bg-[#202733] min-h-screen min-w-full">
      <div className=" flex flex-col justify-center items-center w-[343px] h-[315px] bg-[#313A48] relative rounded-[10px] md:w-[540px] ">
        <h1 className=" text-[#53FFAA] mb-[15px] ">
          {" "}
          advice # {adviceNumber}{" "}
        </h1>
        <p className=" text-[#CEE3E9] text-[24px] w-[295px] h-[150px] md:w-[444px] md:text-[28px]">
          {" "}
          {advice}
        </p>
        <div className=" mt-[20px] w-[295px] flex flex-row justify-around items-center mb-[20px] md:w-[444px] ">
          <div className=" w-[122px] h-[1px] bg-[#4F5D74] md:w-[196px]"></div>
          <div className=" w-[6px] h-[16px] bg-[#CEE3E9]"></div>
          <div className=" w-[6px] h-[16px] bg-[#CEE3E9]"></div>
          <div className=" w-[122px] h-[1px] bg-[#4F5D74] md:w-[196px]"></div>
        </div>
        <div
          onClick={reloadButton}
          className=" w-[64px] h-[64px] rounded-full  cursor-pointer bg-[#53FFAA] absolute bottom-[-10%] flex justify-center items-center  "
        >
          {" "}
          <img src={dotIcon} alt="dots" />
        </div>
      </div>
    </div>
  );
}

export default App;
