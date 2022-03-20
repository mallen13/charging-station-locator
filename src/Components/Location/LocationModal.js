import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const LocationModal = ({isOpen,onClose}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            {/* Modal Header */}
            <ModalHeader>Use My Location</ModalHeader>
            <ModalCloseButton />

            {/* Modal Content */}
            <ModalBody>Geolocation is not currently supported by this browser.</ModalBody>

            {/* Modal Footer */}
            <ModalFooter>
                <Button onClick={onClose}>OK</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)

export default LocationModal