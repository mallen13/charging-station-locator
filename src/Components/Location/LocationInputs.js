import PageSection from '../PageSection';
import { 
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { GeoAlt, Search } from 'react-bootstrap-icons';

const LocationInputs = ({
    fetchWithLocation,
    setLocationInput,
    fetchWithSearch
}) => (
    <PageSection title='2. Location (U.S. Only)'>
        <Stack direction={['column','row']} justifyContent='space-between' alignItems='center'>

            {/* Use Current Location */}
            <Button leftIcon={<GeoAlt size={20}/>} onClick={fetchWithLocation}>Use my Location</Button>

            <Text>or</Text>

            {/* Search for Location */}
            <VStack w='100%'>
                <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input onChange={ e => setLocationInput(e.target.value) } placeholder="City, County, or Address"></Input>
                </FormControl>
                <Button leftIcon={<Search size={20}/>} onClick={fetchWithSearch} w='100%'>Search</Button>
            </VStack>

        </Stack>
    </PageSection>
)

export default LocationInputs;