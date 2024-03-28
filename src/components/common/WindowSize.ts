import { useEffect, useState } from "react"

function WindowSize( {screenWidth}: {screenWidth: number}) {

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < screenWidth);      
    window.addEventListener('resize', handleResize)
    handleResize();
    console.log(isSmallScreen)
    return () => window.removeEventListener('resize', handleResize);
  }, []) 

  return isSmallScreen  
}

export default WindowSize
