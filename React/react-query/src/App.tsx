import UsersWithTraditionalState from '@/components/UsersWithTraditionalState';
import UsersWithReactQuery from '@/components/UsersWithReactQuery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            User Fetching Comparison
          </h1>
          <p className="text-gray-600">
            Comparing traditional state management vs React Query for data fetching
          </p>
        </header>

        <div className="space-y-8">
          <UsersWithTraditionalState />
          <UsersWithReactQuery />
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Data source: JSONPlaceholder API</p>
        </footer>
      </div>
    </div>
  );
}

export default App
