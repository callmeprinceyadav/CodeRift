import { WardrobeProvider } from './components/WardrobeContext';
import WardrobeDashboard from './components/WardrobeDashboard';
import OutfitGenerator from './components/OutfitGenerator';
import './App.css'

function App() {
  return (
    <WardrobeProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Wardrobe Manager</h1>
        
        {/* Wardrobe Dashboard Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Wardrobe</h2>
          <WardrobeDashboard />
        </section>

        {/* Outfit Generator Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Outfit Generator</h2>
          <OutfitGenerator />
        </section>
      </div>
    </WardrobeProvider>
  );
}

export default App;