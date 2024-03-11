import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Button,  } from '@chakra-ui/react';
import { useState } from 'react';

export interface Item{
  route: string;
  label: string;
}
const data: Item[] = [
  { label: "Hair Product", route: "/" },
  { label: "Face Product", route: "/" },
  { label: "Skin Care", route: "/" },
  { label: "Shower Gel", route: "/" },
  { label: "Body Wash", route: "/" },
];
function Humburger() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  
  return (
    <>
      <IconButton 
        icon={<HamburgerIcon/>}
        aria-label='Open Menu'
        colorScheme='blue'
        onClick={toggleDrawer}/>       

        <Drawer isOpen={isOpen} onClose={toggleDrawer} placement='left' size={'xs'} >
          <DrawerOverlay/>
          <DrawerContent opacity={20}>
            <DrawerCloseButton/>
            <DrawerHeader>Select categories</DrawerHeader>
            <DrawerBody alignItems={'center'}>
              <VStack spacing={1}>
                {data.map((item, index) => (
                  <Button key={index} variant="ghost"  _hover={{textDecoration: 'underline', bg: 'blue.50'}}>
                    {item.label}
                  </Button>))}                
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

    </>
    
  )
}

export default Humburger
