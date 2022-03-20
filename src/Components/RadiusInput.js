import PageSection from './PageSection';
import { 
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
} from '@chakra-ui/react';

const RadiusInput = ({setRadius}) => (
    <PageSection title='1. Choose a Search Radius'>

        {/* Label */}
        <FormLabel>Distance (Miles)</FormLabel>

        {/* Number Input */}
        <NumberInput 
            onChange={ val => setRadius(val) } 
            step={5} 
            defaultValue={5} 
            precision={0} 
            min={5} 
            max={500}
        >
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>

    </PageSection>
)

export default RadiusInput