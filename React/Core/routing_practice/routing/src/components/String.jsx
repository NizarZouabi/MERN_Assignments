import React from 'react';
import { useParams } from "react-router-dom";

const String = () => {
    const {str} = useParams()
    return (
        <div>
            <h1>The word is: {str}</h1>
        </div>
    );
}

export default String;
