import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import elv from "./elv.png";
import "./Lift.css";

const Lift = ({ floor }) => {
    // const [queue, setQueue] = useState();
    const flr = floor;
    const liftRef = useRef();

    console.log(floor);
    useEffect(() => {
        const lift = liftRef.current;

        switch (flr) {
            case "G":
                lift.style.bottom = 70 + "vh";
                break;
            case "1":
                lift.style.bottom = 145 + "vh";
                break;
            case "2":
                lift.style.bottom = 220 + "vh";
                break;
            case "3":
                lift.style.bottom = 295 + "vh";
                break;
            case "4":
                lift.style.bottom = 370 + "vh";
                break;
            case "5":
                lift.style.bottom = 445 + "vh";
                break;
            case "6":
                lift.style.bottom = 520 + "vh";
                break;
            case "7":
                lift.style.bottom = 595 + "vh";
                break;
            default:
                lift.style.bottom = 60 + "vh";
        }
    }, [flr]);
    return (
        <div className='lift' ref={liftRef}>
            Current Floor:
            <br />
            {floor}
            <br />
            <img src={elv} alt='elevator' className='elv' />
        </div>
    );
};

const mapStateToProps = (state) => ({
    floor: state.floor,
});

export default connect(mapStateToProps)(Lift);
