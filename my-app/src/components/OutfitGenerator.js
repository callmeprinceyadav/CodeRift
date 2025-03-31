import { useWardrobe } from './WardrobeContext';
import { useState } from 'react';

function OutfitGenerator() {
  const { wardrobe } = useWardrobe();
  const [outfit, setOutfit] = useState([]);

  const generateOutfit = () => {
    const topItems = wardrobe.filter(item => item.category === 'top');
    const bottomItems = wardrobe.filter(item => item.category === 'bottom');
    const shoeItems = wardrobe.filter(item => item.category === 'shoe');

    const top = topItems[Math.floor(Math.random() * topItems.length)];
    const bottom = bottomItems[Math.floor(Math.random() * bottomItems.length)];
    const shoe = shoeItems[Math.floor(Math.random() * shoeItems.length)];

    setOutfit([top, bottom, shoe]);
  };

  return (
    <div>
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4" onClick={generateOutfit}>Generate Outfit</button>
      <div className="flex gap-4">
        {outfit.map(item => (
          <div key={item.id} className="bg-white rounded shadow p-4">
            <img src={item.image} alt={item.type} className="w-full h-auto mb-2" />
            <p className="text-sm">{item.type}</p>
            <div className="flex justify-center mt-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Like</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutfitGenerator;