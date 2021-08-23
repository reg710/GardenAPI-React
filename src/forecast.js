import React from 'react';
import './forecast.css';
import Axios from 'axios';


// Not sure if this is the usual place to store this information
const API_KEY = process.env.REACT_APP_API_KEY;

// Need to figure out how to make params changeable by input field on page


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

    // Commented out for the moment so I don't keep making API calls every time it renders
    // componentDidMount() {
    //     this.runAxios();
    //   }

    runAxios() {

        // Creating date variables to be able to regularly update API parameters to always be set to yesterday
        let today = new Date();
        let yesterday = new Date(today);

        // sets yesterday to day before today
        yesterday.setDate(yesterday.getDate() - 1);

        let y_year = yesterday.getFullYear();
        let y_month = (yesterday.getMonth() + 1);
        let y_date = yesterday.getDate();

        // Update month and day to keep in two number format
        if (y_month < 10){
            y_month = '0' + y_month;
        };
        if(y_date < 10){
            y_date = '0' + y_date;
        };

        let y_full_date = `${y_year}-${y_month}-${y_date}`
        

        // Debugging checks on date formatting
        // console.log(`today: ${today.toDateString()}`);
        // console.log(`yesterday: ${yesterday.toDateString()}`);
        // console.log(y_year);
        // console.log(y_month);
        // console.log(y_date);
        // console.log(y_full_date);


        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/history.json',
            params: {q: '15201', dt: `${y_full_date}`, lang: 'en'},
            headers: {
              'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
              'x-rapidapi-key': `${API_KEY}`
            }
        };

        Axios.request(options)
        .then((response) => {
            // console.log(response.data);
            this.setState({
               yesterday_rain: response.data.forecast.forecastday[0].day.totalprecip_mm,
            });
        }).catch((error) => {
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