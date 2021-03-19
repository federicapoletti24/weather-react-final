import React, {useState} from "react";

export default function WeatherUnit(props) {
    const[unit, setUnit] = useState("celsius")
    function convertFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === 'celsius') {
    return (<div className="celsius">
                <strong className="temperature">
                {Math.round(props.celsius)}
                </strong>
                <span className="unit">°C | <a href="/" onClick={convertFahrenheit}>°F</a></span>
    </div>
    );
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (<div className="fahrenheit">
                <strong className="temperature">
                {Math.round(fahrenheit)}
                </strong>
                <span className="unit"><a href="/" onClick={convertCelsius}>°C</a> | °F</span>
    </div>
    );
    
}
}