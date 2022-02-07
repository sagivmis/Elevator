import { ELEVATE } from "../actionTypes";

export const lift = (e) => (dispatch) => {
    const name = e.target.getAttribute("name");
    window.scrollTo(0, document.getElementById(`floor-${name}`).offsetTop);
    dispatch({ type: ELEVATE, name });
};
