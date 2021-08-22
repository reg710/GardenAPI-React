import React from 'react';
import './forecast.css';
import Axios from 'axios';


// Not sure if this is the usual place to store this information
const API_KEY = process.env.REACT_APP_API_KEY;

// Need to figure out how to make params changeable by input field on page
const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/history.json',
    params: {q: '15201', dt: '2021-08-16', lang: 'en'},
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': `${API_KEY}`
    }
  };

class Forecast extends React.Component {
    // function that allows me to set up state
    constructor(props) {
        super(props);
        
        this.state = {
            test: "I'm here, don't worry",
            yesterday_rain: 0,
        };

        // Need to include this bind so the runAxios function works
        this.runAxios = this.runAxios.bind(this);
    }

    componentDidMount() {
        this.runAxios();
      }

    runAxios() {
        Axios.request(options)
        .then((response) => {
            // console.log(response.data);
            this.setState({
               yesterday_rain: response.data.forecast.forecastday[0].day.totalprecip_mm,
            });
        }).catch(function (error) {
            console.error(error);
        });

        console.log(this.state.yesterday_rain)
    }

    render() {
        return (
            <div>
                Hello World! {this.state.test} 
                <button onClick={this.runAxios}>Checking that API!</button>
                {this.state.yesterday_rain}
            </div>
        );
    }
}

export default Forecast;