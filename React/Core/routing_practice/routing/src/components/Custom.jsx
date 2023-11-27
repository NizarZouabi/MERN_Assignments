import React from 'react';
import { useParams } from "react-router-dom";

const Custom = () => {
    const {clr, bg, str} = useParams()
    return (
        <div>
            <h1 style={{color:`${clr}`, backgroundColor:`${bg}`}}>The Word is: {str} </h1>
        </div>
    );
}

export default Custom;
