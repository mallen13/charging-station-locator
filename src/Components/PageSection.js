import { Container, Divider, Heading } from "@chakra-ui/layout"

const PageSection = ({title,children}) => (
    <Container>
        {/* Heading,Body,Divider */}
        <Heading size='md' mb='5'>{title}</Heading>
        {children}
        <Divider m='5' maxW='90%'/>
    </Container>
)

export default PageSection;