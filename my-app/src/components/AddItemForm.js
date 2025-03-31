import { useWardrobe } from './WardrobeContext';
import { useState } from 'react';

function AddItemForm({ onClose }) {
  const { addItem } = useWardrobe();
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('top');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      image,
      type,
      color,
      category,
    };
    addItem(newItem);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1">Image URL</label>
            <input type="text" value={image} onChange={e => setImage(e.target.value)} className="border rounded px-2 py-1 w-full" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1">Type</label>
            <input type="text" value={type} onChange={e => setType(e.target.value)} className="border rounded px-2 py-1 w-full" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1">Color</label>
            <input type="text" value={color} onChange={e => setColor(e.target.value)} className="border rounded px-2 py-1 w-full" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded px-2 py-1 w-full">
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="shoe">Shoe</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add</button>
            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;