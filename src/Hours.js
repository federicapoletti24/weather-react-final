import React from "react";

export default function Hours (props) {
    return <div className="Hours">
        {new Date(props.data.dt*1000).getHours()}:00
    </div>
}