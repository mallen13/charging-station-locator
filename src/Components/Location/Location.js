import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import LocationInputs from './LocationInputs';
import AlertModal from '../AlertModal';

const Location = ({fetchResults}) => {

  //state
  const [locationInput,setLocationInput] = useState();
  const [modalInfo,setModalInfo] = useState({title: '', message: ''});

  //modal controls
  const { isOpen, onOpen, onClose } = useDisclosure();

  //open modal
  const openModal = (title,message) => {
    console.log('opened modal')
    setModalInfo({title: title, message: message})
    onOpen();
  }

  //get location and call fetch
  const fetchWithLocation = () => {
    //on success and fail
    const locationSuccess = pos => fetchResults(`${pos.coords.latitude}, ${pos.coords.longitude}`,0);
    const locationFail = () => openModal('Geolocation','Unable to get current location, please search instead.')

    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(pos => locationSuccess(pos),locationFail)
    else openModal('Geolocation','Geolocation is currently not supported by this broswer.')
  }

  //call fetch w/ input
  const fetchWithSearch = () => {
    //if location input call fetch
    if(locationInput) fetchResults(locationInput,0)
    else openModal('Location Search','Search input cannot be blank.')
  }

  return (
    <>
      {/* Inputs */}
      <LocationInputs 
        fetchWithLocation={fetchWithLocation} 
        setLocationInput={setLocationInput} 
        fetchWithSearch={fetchWithSearch}
      />
      {/* Geolocation Modal */}
      <AlertModal 
        isOpen={isOpen} 
        onClose={onClose}
        title={modalInfo.title}
        message={modalInfo.message}
      />
    </>
  )
}

export default Location;