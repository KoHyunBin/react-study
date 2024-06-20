import { useState } from "react";
import Result from "./result";
import Minus from "./minus";

export default function Calculator(){

    const [resultData, setResultData] = useState(0);
    const [minusData, setMinusData] = useState(0);

    function addPlus() {
        setResultData(resultData + 1);
        console.log(resultData);
    }

    function minusButton(){
        setMinusData(minusData - 1);
        console.log(minusData);
    }

    return (
        <>
            <h3>1씩 더하기</h3>
            <button onClick={addPlus}>더하기</button>
            <button onClick={minusButton}>마이너스</button>
            <Result inputData={resultData}/>
            <Minus data={minusData}/>
        </>
    );
}