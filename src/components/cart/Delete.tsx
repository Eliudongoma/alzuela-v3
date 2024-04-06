import { Button, 
         Modal, 
         ModalHeader, 
         ModalBody,
         ModalOverlay, 
         ModalContent,
         ModalCloseButton, 
         ModalFooter, 
         Text, 
         Icon} from "@chakra-ui/react";
import { useCart } from "../../hooks";
import { WarningIcon } from "@chakra-ui/icons";

interface DeleteProps{
  productId: string,
  isOpen: boolean,
  onClose: () => void
}

const Delete: React.FC<DeleteProps> = ({ productId, isOpen, onClose}) =>  {
  const cart = useCart();  

  const handleDelete = () => {
    cart.remove(productId);  
    onClose;
  } 
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
     <ModalOverlay/>
     <ModalContent>        
       <ModalHeader>
        <Icon as={WarningIcon} mr={2} color={'red.300'}/>
        Confirm Deletion
      </ModalHeader>
       <ModalCloseButton/>
       <ModalBody>
         <Text>Are you sure you want to delete?</Text>
       </ModalBody>
       <ModalFooter>
         <Button bg="green.300" onClick={handleDelete} mr={2}>
           Yes
         </Button>
         <Button bg="red.300" onClick={onClose}>
           No
         </Button>
       </ModalFooter>
     </ModalContent>
   </Modal>
  )
}

export default Delete
