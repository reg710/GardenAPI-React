# Should I Water My Garden Today?

This is a personal project I started after graduating from Academy PGH. My goals are to:
* Build an easy way to figure out if I need to water my garden today
* Get more experience working with React and APIs

A user can enter the zip code of their garden's location and quickly see a message telling them whether or not it's time to get out that watering can. That decision will be based on how much precipation there has been over the past three days, which will be information pulled from RapidAPI's WeatherAPI. The user will also be able to say whether or not they watered yesterday, and this will update the answer they see accordingly.


## To Do

- [x] Find API with historical weather information, specifically precipitation data
- [ ] Make sure API key is stored correctly so that it isn't being shared accidentally
- [ ] Build forecast component to be used to render weather information for testing
- [ ] Practice axios requests using button to make request
- [ ] Once I'm able to get the JSON, make sure I can parse it to return the rain information needed
- [ ] Check and ensure that you are getting three days worth of information, not just one
- [ ] Modify hardcoded query parameters that are being used for testing, to enable user to input their own zipcode
- [ ] Modify hardcoded date parameters so that it will always be 'past three days' not a set date
- [ ] Create input text box for user's zipcode
- [ ] Learn about deploying and then get it up and going