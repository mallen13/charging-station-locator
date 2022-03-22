import { useState } from 'react'
import Header from "./Components/Header";
import Title from "./Components/Title";
import RadiusInput from "./Components/RadiusInput";
import Location from './Components/Location/Location';
import Results from './Components/Results/Results'
import { Box,VStack } from '@chakra-ui/react';
import { getStations } from './AppController';

function App() {

  //state
  const [radius,setRadius] = useState(5);
  const [status,setStatus] = useState('Select a Location Above')
  const [stations,setStations] = useState([]);

  //fetch results from search string
  const fetchResults = async (location,offset) => {
    //show loading
    setStatus('Loading');
    
    //get stations
    const stationList = await getStations(radius,location,offset);

    //if no stations
    if (stationList === 'no data') setStatus('No Results Found');
    else if (stationList === 'error') setStatus('System Error. Please try again later.');

    //if stations...
    else {
      setStations(stationList);
      setStatus('success');
    }
  }
  return (
    <>
      {/* Render header and 3 sections(radius,location,input) */}
      <Header/>
      <Box minH='calc(100vh - 140px)'>
        <VStack spacing='10'>
          <Title />
          <RadiusInput setRadius={setRadius}/>
          <Location fetchResults={fetchResults}/>
          <Results radius={radius} status={status} stations={stations}/>
        </VStack>
      </Box>
    </>
  )
}

export default App;
