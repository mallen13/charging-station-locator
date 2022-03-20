import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Button,
    Circle,
    HStack,
    Link,
    Text,
    Wrap
} from '@chakra-ui/react';
import { 
    Diagram2,
    Geo,
    Lock,
    LightningCharge,
    Map,
    Outlet,
    Telephone, 
    } from "react-bootstrap-icons";
import ResultCardSection from "./ResultCardSection";

//map stations to accordion items
export const mapStations = stationArr => stationArr.map( (station,i) => {

    //list of sections
    const sections = [
        {
            icon: <Map color='#DA1F24' size='15' />,
            title: 'Address',
            content: <>
                     {station.streetAddress}<br />
                     {station.city}, {station.state} {station.zip}
                     </>
        },
        {
            icon: <Outlet color='#DA1F24' size='20'/>,
            title: 'Connections',
            content: <>
                     {station.level1 ? 'Level 1 (120v). ': null}
                     {station.level2 ? 'Level 2 (240v). ': null}
                     {station.connectorTypes.map( connector => `${connector} Connector. ` )}
                     </>
        },
        {
            icon: <Lock color='#DA1F24' size='20'/>,
            title: 'Access',
            content: `${station.access}. ${station.hours}.`
        },
        {
            icon: <Diagram2 color='#DA1F24' size='23'/>,
            title: 'Network',
            content: station.network
        },
        
    ]

    return (
    <AccordionItem key={i}>

        {/* Accordion Header */}
        <AccordionButton justifyContent='space-between' minH='60px'>
            <HStack>
                <Circle size='8' bg='#DA1F24' mr='1'>
                    <LightningCharge color='white' size='25' />
                </Circle>
                <Text align='left'> 
                    {station.name} 
                </Text>
            </HStack>

            <HStack>
                <Badge ml='2' colorScheme='green'>{`${Math.round(station.distance * 10) / 10} Miles`}</Badge>
                <AccordionIcon />
            </HStack>
            
        </AccordionButton>

        {/* Accordion Body */}
        <AccordionPanel p='0'>
            <Wrap justify='center'>
                {/* map each section from sections arr */}
                {sections.map( (section,i) => (
                    <ResultCardSection key={i} icon={section.icon} title={section.title} station={station}>
                     {
                         section.content
                            ? section.content
                            : 'Not Available'
                     }
                    </ResultCardSection>
                ))}

                {/* Phone */}
                <ResultCardSection key={i} icon={<Telephone color='#DA1F24' size='16'/>} title='Phone Number' station={station}>
                    {
                        station.phone 
                            ? <Link href={`tel:${station.phone.replace(/\D/g,'')}`} textDecor='underline'>{station.phone}</Link>
                            : 'Not Available'
                    }
                    
                 </ResultCardSection>

                {/* Navigate */}
                <ResultCardSection>
                <Button leftIcon={<Geo size='25'/>} onClick={ () => 
                    window.open(`
                        https://www.google.com/maps/dir//
                        ${station.streetAddress}
                        ${station.city}
                        ${station.state}
                        ${station.zip}
                    `)
                }>
                    Navigate
                </Button>
                </ResultCardSection>
            </Wrap>

        </AccordionPanel>
    </AccordionItem>
    )
})