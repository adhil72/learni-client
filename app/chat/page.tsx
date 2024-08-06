"use client";

import React, { useState, useEffect } from "react";
const { useSpeechSynthesis } = require("react-speech-kit");

const TextToSpeech = ({ text }: any) => {
    const { speak } = useSpeechSynthesis();
    const [rate, setRate] = useState(1);

    const handleRateChange = (event:any) => {
        setRate(event.target.value);
    };

    return (
        <div>
            <p>{text}</p>
            <label>
                Rate:
                <input
                    type="number"
                    value={rate}
                    min="0.1"
                    max="2"
                    step="0.1"
                    onChange={handleRateChange}
                />
            </label>
            <button onClick={() => speak({ text, rate })}>Speak</button>
        </div>
    );
};

export default function Page() {
    return <div>
        <TextToSpeech text={"Hello. this is an example"} />
    </div>
}