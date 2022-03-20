import PageSection from "../PageSection";
import { 
  Accordion,
  Center,
  Spinner,
  Text
} from '@chakra-ui/react';
import { mapStations } from './ResultsController';

const Results = ({radius,status,stations}) => {
  
  const results =  () => (
    <>
    <Text align='center' mb='3'>Showing up to 10 results within {radius} miles of selected location. </Text>
      <Accordion allowMultiple allowToggle>
        {mapStations(stations)}
      </Accordion>
      <Text mt='4' textAlign='center'>End of Results</Text>
    </>
  )

  return (
    //return spinner,secton,status
    <PageSection title='3. Results'>
      {status === 'Loading' ? <Center>Fetching Data...<Spinner color='#DA1F24' ml='3'/></Center>
        : status === 'success' ? results()
        : <Text align='center'>{status}</Text>
      }  
    </PageSection> 
  )
}

Results.propTypes = {};

export default Results;