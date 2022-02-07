import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import elv from "./elv.png";
import "./Lift.css";
import { G, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, DEFAULT } from "./liftCfg";
const Lift = ({ floor }) => {
    // const [queue, setQueue] = useState();
    const flr = floor;
    const liftRef = useRef();

    console.log(floor);
    useEffect(() => {
        const lift = liftRef.current;

        switch (flr) {
            case "G":
                lift.style.bottom = G + "vh";
                break;
            case "1":
                lift.style.bottom = ONE + "vh";
                break;
            case "2":
                lift.style.bottom = TWO + "vh";
                break;
            case "3":
                lift.style.bottom = THREE + "vh";
                break;
            case "4":
                lift.style.bottom = FOUR + "vh";
                break;
            case "5":
                lift.style.bottom = FIVE + "vh";
                break;
            case "6":
                lift.style.bottom = SIX + "vh";
                break;
            case "7":
                lift.style.bottom = SEVEN + "vh";
                break;
            default:
                lift.style.bottom = DEFAULT + "vh";
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
