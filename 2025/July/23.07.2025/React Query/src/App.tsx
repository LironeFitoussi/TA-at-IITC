import UsersWithTraditionalState from './components/UsersWithTraditionalState'

function App() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            React Query Demo
          </h1>
          <p className="text-gray-600">
            Comparing traditional state management vs React Query for data fetching and mutations
          </p>
        </header>

        <div className="space-y-8">
          {/* Users Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users Data Fetching</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <UsersWithTraditionalState />
            </div>
          </section>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>Data source: JSONPlaceholder API</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
