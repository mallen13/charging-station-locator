import { Container,Heading,HStack,Text } from "@chakra-ui/react"


const ResultCardSection = ({icon,title,children}) => (
    <Container maxW={['100%','31%']} pt='2' pb='2'>
        {/* Section Title and Icon */}
        <Heading size='sm'>
            <HStack>
                {icon}
                <Text>{title}</Text>
            </HStack>
        </Heading>

        {/* Section Body */}
        <Text color='gray.600'>
            {children}
        </Text>
    </Container>
)
export default ResultCardSection