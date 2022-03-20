import { Center,Link,Text } from '@chakra-ui/react';

const Footer = () => (
    <Center h='50px' borderTop='1px solid lightgray' bg='gray.100'>
        <Text>
            Created By&nbsp;
            <Link href='https://mattallen.tech' textDecoration='underline' isExternal>MattAllen.Tech</Link>
        </Text>
    </Center>
)

export default Footer