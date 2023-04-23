import { useState } from "react";
import WinScreen from "./WinScreen";

export default function Game() {
    const [score, setScore] = useState(0)
    const [add, setAdd] = useState(1)

    let variableScore = score
    const increaseScore = () => {
        variableScore += add
        setScore(variableScore)
    }

    let variableAdd = add
    const increaseAdd = () => {
        if (score >= 10) {
            variableAdd += 1
            variableScore -= 10
            setScore(variableScore)
            setAdd(variableAdd)
        }
        else {
            alert('You can\'t afford that!')
        }
    }

    if(score >= 100){
        return <WinScreen />
    }

    return (
        <main>
            <h1>Current Score: {score}</h1>
            <button onClick={increaseScore}>+{add}</button>
            <br />
            <button onClick={increaseAdd}>Pay 10 points to change from +{add} to +{add + 1}</button>
        </main>
    )
}