import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, FormControl, InputGroup, InputLeftElement, Input, InputRightElement  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function SearchBar() {

  const [searchVisible, setSearchVisible] = useState(true);
  const [searchItem, setSearchItem] = useState('');

  const handleClearSearch = () => setSearchItem('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearchItem(e.target.value);

  useEffect(() => {
    const handleResize = () => setSearchVisible(window.innerWidth > 650);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);   
  }, [])

  return (
    <Box>
      <FormControl>
        <InputGroup>
          <InputLeftElement children={<SearchIcon color="gray.300" boxSize={6} />}/>
          {searchVisible &&
          <Input type="text" name="search" placeholder="Search..." value={searchItem} onChange={handleInput}
            color={"white"} fontSize={16} h={10}  _placeholder={{fontSize:'20px'}} w={'40vw'}/>}
            {searchItem &&
          <InputRightElement children={<CloseIcon color="gray.300" boxSize={4} onClick={handleClearSearch}/>}/>}
        </InputGroup> 
      </FormControl>
    </Box>    
  )
}

export default SearchBar
