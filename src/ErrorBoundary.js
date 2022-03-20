import React from 'react';
import { Center, Circle, Heading, HStack, Text, VStack }from '@chakra-ui/react';
import { LightningCharge } from 'react-bootstrap-icons';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasErr: false };
  } 

  static getDerivedStateFromError(err) {
      console.error(err)
      return { hasErr: true}
  }

  render() {
    if (this.state.hasErr) {
      return (
        <Center minH='100vh' >
            <VStack>
              {/* Header */}
              <HStack>
                <Heading>Place to Charge</Heading>
                <Circle size='40' bg='#DA1F24' >
                  <LightningCharge color='#FFFFFF' size='25'/>
                </Circle>
              </HStack>

              {/* Message */}
              <Text>Something went wrong. You may need to refresh the page or try again later.</Text>
            </VStack> 
        </Center>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary