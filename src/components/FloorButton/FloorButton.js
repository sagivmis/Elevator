import React, { useEffect, useState } from "react";
import "./FloorButton.css";
import { connect } from "react-redux";
import { lift } from "../../actions/";

const FloorButton = ({ value, lift, name, letter, queueRef }) => {
    return (
        <div className='button-container '>
            <div className={letter ? "button-wrapper lobby" : "button-wrapper"}>
                {/* <button
                    onClick={(e) => {
                        queueRef.current.addToQueue(e, value);
                    }}
                    name={name}
                >
                    {value}
                </button> */}

                <button onClick={(e) => lift(e)} name={name}>
                    {value}
                </button>
            </div>
        </div>
    );
};

export default connect(null, { lift })(FloorButton);
