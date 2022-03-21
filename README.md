# charging-station-locator
Electric vehicle charging station locator built with React and styled by Chakra UI. Data provided by NREL.gov API. Users can search using their current geolocation or search for a location. After sending locatin data to the api, up to the top ten closest results can be viewed.

## Technologies
This application was build using React and Chakra UI. 

Functional React components were built using common hooks such as useState and useEffect. Components were designed as smart or dumb components, with re-usability in mind. State was simply managaed through useState and passed through props as needed. Chakra UI was used to quickly style and develop comonents. 

The user's location is passed to the API as latitude and longitude obtained from the browser Geolocation API. Alternatively, a search string can be passed to the data API. The api is a get request that takes in a few parameters to narrow down search results. 

Testing were written using Jests and React testing library.

## Development
The development process started with a planning phase that included listing project requirements and needs. After that, the design was mocked using Figma. Development happened next. Careful planning led to a quick build that went according to plan. Automated testing and a few user tests were done next. Finally, the project was complete and uploaded to GitHub. the process may continue down the road if further updates are waranted.

## Roadmap
In the future, some new features could be implemented such as the ability to login and save previously visited locations. In addition, API calls could be offset to allow for pagination of results so that more data can be fetched on a search. 
