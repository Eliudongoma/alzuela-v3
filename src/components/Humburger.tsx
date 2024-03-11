import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Button,  } from '@chakra-ui/react';
import { useState } from 'react';
function Humburger() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen)
  return (
    <>
      <IconButton 
        icon={<HamburgerIcon/>}
        aria-label='Open Menu'
        colorScheme='blue'/>

        <Drawer isOpen={isOpen} onClose={toggleDrawer}>
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={3}>
                {/* {data.map((item, index) => {
                  <Button variant="ghost" key={index}>{item.label}</Button>
                })} */}
                <Button variant="ghost">Item 1</Button>
                <Button variant="ghost">Item 2</Button>
                <Button variant="ghost">Item 3</Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

    </>
    
  )
}

export default Humburger
