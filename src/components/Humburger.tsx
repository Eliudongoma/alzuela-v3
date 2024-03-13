import { Menu, MenuButton, MenuList, MenuItem, VStack, Button, Text,  } from '@chakra-ui/react';
import { useState } from 'react';
import {  HamburgerIcon } from '@chakra-ui/icons';
import { data } from '../data/Category';
import { useNavigate } from 'react-router-dom';

function Humburger() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Menu>
        <MenuButton as={Button} leftIcon={<HamburgerIcon />} 
            onClick={toggleMenu} w={10} bg={'blue.400'}>        
        </MenuButton>
        <MenuList bg={'blue.400'} color={'black'} p={2}>
          <VStack spacing={1}>
            <Text>Select a category</Text>
            {data.map((item, index) => (
              <MenuItem key={index} onClick={() => navigate(item.route)} bg={'blue.400'} 
                _hover={{ textDecoration: 'underline', bg: 'blue.50' }}>
                {item.label}
              </MenuItem>
            ))}
          </VStack>
        </MenuList>
      </Menu>
    </>
  )
}

export default Humburger
