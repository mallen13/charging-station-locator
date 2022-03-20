import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({ 
    components: {
        Button: {
            baseStyle: {
                w: '100%',
                bg: '#DA1F24',
                color: 'white',
                backgroundColor: '#DA1F24',
                _hover: {
                    bg: '#b3191e',
                    background: '#b3191e'
                }
            }
        }
    }
});

export default theme;