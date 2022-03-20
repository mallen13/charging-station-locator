import { Heading, Center, Circle } from '@chakra-ui/react';
import { LightningCharge } from 'react-bootstrap-icons';

const Header = () => (
    <Center mb='10' bg='#DA1F24' h='50px'>

        {/* Title */}
        <Heading size='md' mr='2' color='white'>Place to Charge</Heading>

        {/* Logo */}
        <Circle size='8' bg='white'>
            <LightningCharge color='#DA1F24' size='25' />
        </Circle>
    </Center>
)

export default Header