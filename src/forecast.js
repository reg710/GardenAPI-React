import React from 'react';
import './forecast.css';


// Not sure if this is the usual place to store this information
const API_KEY = process.env.REACT_APP_API_KEY;

class Forecast extends React.Component {
    // function that allows me to set up state
    constructor(props) {
        super(props);
        
        this.state = {
            test: "I'm here, don't worry",
            weather_history: [],
        };

        // Need to include this bind so the runAxios function works
        this.runAxios = this.runAxios.bind(this);
    }

    runAxios() {

        console.log(API_KEY)
    }

    render() {
        return (
            <div>
                Hello World! {this.state.test} 
                <button onClick={this.runAxios}>Checking that API!</button>
            </div>
        );
    }
}

export default Forecast;