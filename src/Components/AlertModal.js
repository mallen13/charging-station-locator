import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    VStack
  } from '@chakra-ui/react';
  import { ExclamationTriangle } from 'react-bootstrap-icons';

const AlertModal = ({isOpen,onClose,title = 'Alert',message}) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
            
            {/* Header */}
            <ModalHeader bg='gray.100'>{title}</ModalHeader>
            <ModalCloseButton />

            {/* Content */}
            <ModalBody>
                <VStack>
                    <ExclamationTriangle color='gold' size='30' />
                    <Text>
                        {message}
                    </Text>
                </VStack>
                
            </ModalBody>

            <ModalFooter>
                <Button onClick={onClose} variant='redButton' w='auto'>OK</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)

export default AlertModal