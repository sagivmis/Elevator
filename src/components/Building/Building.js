import React from "react";
import "./Building.css";
import { connect } from "react-redux";
import { useStore } from "react-redux";

const Building = ({ floor, name, value }) => {
    const store = useStore();
    return (
        <div className='floor-outer' id={`floor-${value}`}>
            <div className='floor-inner'>{value}</div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    floor: state.floor,
});

export default connect(mapStateToProps)(Building);
