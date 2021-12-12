# Should I Water My Garden Today?

This is a personal project I started after graduating from Academy PGH. My goals are to:
* Build an easy way to figure out if I need to water my garden today
* Get more experience working with React and APIs

A user will be able to enter the zip code of their garden's location and quickly see a message telling them whether or not it's time to get out that watering can. That decision will be based on how much precipitation there has been over the past three days, which will be information pulled from RapidAPI's WeatherAPI. 

## To Do

- [x] Find API with historical weather information, specifically precipitation data
- [x] Make sure API key is stored as an environment variable so that it isn't being shared accidentally
- [x] Build basic forecast component to be used to render weather information for testing
- [x] Add axios to be able to make requests of weather API
- [x] Practice axios requests using button to make request
- [x] Once I'm able to get the JSON, make sure I can parse it to return the rain information needed
- [x] Check and ensure that you are getting three days worth of information, not just one -- Current API selection only returns one day for free version. I may need to either make three calls for three dates or find an alternative API with option to return a date range
- [x] Find a way to set yesterday's date to a variable
- [ ] Style the page up a bit
- [ ] Find a way to do three separate calls to the API
- [ ] Build rainfall logic - how much over past three days before you won't need to water
- [x] Create input text box for user's zipcode
- [x] Have params update to match user zipcode and make new request
- [ ] Find way to validate user's input and/or display error message in user friendly way if no results found with provided input
- [ ] Learn about deploying and then get it up and going