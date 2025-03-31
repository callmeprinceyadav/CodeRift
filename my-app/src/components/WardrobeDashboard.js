import { useWardrobe } from './WardrobeContext';
import AddItemForm from './AddItemForm';
import { useState } from 'react';

function WardrobeDashboard() {
  const { wardrobe, filterByCategory } = useWardrobe();
  const [showForm, setShowForm] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');

  const filteredWardrobe = currentFilter === 'all' ? wardrobe : filterByCategory(currentFilter);

  const handleAddItem = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleAddItem}>Add Item</button>
      <div className="flex mb-4">
        <button className="mr-2 bg-gray-200 px-2 py-1 rounded" onClick={() => setCurrentFilter('all')}>All</button>
        <button className="mr-2 bg-gray-200 px-2 py-1 rounded" onClick={() => setCurrentFilter('top')}>Top</button>
        <button className="mr-2 bg-gray-200 px-2 py-1 rounded" onClick={() => setCurrentFilter('bottom')}>Bottom</button>
        <button className="bg-gray-200 px-2 py-1 rounded" onClick={() => setCurrentFilter('shoe')}>Shoe</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredWardrobe.map(item => (
          <div key={item.id} className="bg-white rounded shadow p-4">
            <img src={item.image} alt={item.type} className="w-full h-auto mb-2" />
            <p className="text-sm">{item.type}</p>
          </div>
        ))}
      </div>
      {showForm && <AddItemForm onClose={handleCloseForm} />}
    </div>
  );
}

export default WardrobeDashboard;