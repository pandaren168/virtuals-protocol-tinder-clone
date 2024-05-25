import React from "react";
import useSwipeLanding from "./hook/useSwipeLanding";
import SwipeCard from "./component/SwipeCard";
import "./SwipeLandingWidget.css";

const SwipeLandingWidget = ({}) => {
    const { users } = useSwipeLanding();

    return <div className="swipe-landing-widget-container">{users.length && <SwipeCard users={users} />}</div>;
};

export default SwipeLandingWidget;
