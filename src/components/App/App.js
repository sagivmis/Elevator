import React, { useRef } from "react";
import FloorButton from "../FloorButton/FloorButton";
import Building from "../Building/Building.js";
import liftData from "../../utils/data";
import Lift from "../Lift/Lift.js";
import "./App.css";
import Queue from "../Queue/Queue";
//make a route for the specific building and chnage accordingly
const App = () => {
    const queueRef = useRef();
    // queueRef.current.hello();
    return (
        <div className='App flex'>
            <div className='main-space'>
                {/* <Queue ref={queueRef} /> */}
                <div className='btn-holder'>
                    {queueRef &&
                        liftData.map((lift, idx) => (
                            <FloorButton
                                key={idx}
                                name={lift.name}
                                value={lift.name}
                                letter={
                                    lift.name > 0 && lift.name < 99
                                        ? false
                                        : true
                                }
                                queueRef={queueRef}
                            />
                        ))}
                </div>
                <div className='lift-holder'>
                    {liftData.map((building, idx) => (
                        <Building
                            key={idx}
                            name={building.name}
                            value={building.name}
                        />
                    ))}
                    <Lift />
                </div>
            </div>
        </div>
    );
};

export default App;
