import { createContext, useContext, useState } from 'react';

const WardrobeContext = createContext();

export function WardrobeProvider({ children }) {
  const initialWardrobe = [
    { id: 1, image: 'https://example.com/t-shirt.jpg', type: 'Red T-shirt', color: 'red', category: 'top' },
    { id: 2, image: 'https://example.com/jeans.jpg', type: 'Blue Jeans', color: 'blue', category: 'bottom' },
    { id: 3, image: 'https://example.com/sneakers.jpg', type: 'White Sneakers', color: 'white', category: 'shoe' },
  ];
  const [wardrobe, setWardrobe] = useState(initialWardrobe);

  const addItem = (item) => {
    setWardrobe([...wardrobe, item]);
  };

  const filterByCategory = (category) => {
    return wardrobe.filter(item => item.category === category);
  };

  return (
    <WardrobeContext.Provider value={{ wardrobe, addItem, filterByCategory }}>
      {children}
    </WardrobeContext.Provider>
  );
}

export const useWardrobe = () => useContext(WardrobeContext);