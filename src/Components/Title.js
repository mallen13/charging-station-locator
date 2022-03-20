import { Box,Heading, Link, Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <Box textAlign='center'>

        {/* Heading */}
        <Heading size='lg' mb='2' p='2'>Electric Vehicle Charging Station Locator</Heading>

        {/* Subheading */}
        <Text color='gray.600'>
            Data courtesy of&nbsp;
            <Link href='https://www.nrel.gov' isExternal textDecoration='underline'>nrel.gov</Link>.
        </Text>
    </Box>
  )
}

export default Title