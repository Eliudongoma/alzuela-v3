import { createContext, useState, ReactNode } from 'react';

interface StateContextType {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}
interface StateProviderProps {
  children: ReactNode;
}
export const StateContext = createContext<StateContextType| undefined>(undefined);

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <StateContext.Provider value={{ cartCount, setCartCount}}>
      { children }
    </StateContext.Provider>
  )
}

export default StateProvider

