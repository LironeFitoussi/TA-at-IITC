import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import SubmitButton from './components/SubmitButton';
import ErrorSimulator from './components/ErrorSimulator';
import NavigationLink from './components/NavigationLink';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="space-y-8">
        <section>
          <h2 className="text-lg font-bold">Search Section</h2>
          <SearchInput />
        </section>
        <section>
          <h2 className="text-lg font-bold">Form Section</h2>
          <SubmitButton />
        </section>
        <section>
          <h2 className="text-lg font-bold">Navigation</h2>
          <NavigationLink />
        </section>
        <section>
          <h2 className="text-lg font-bold">Error Simulation</h2>
          <ErrorSimulator />
        </section>
      </main>
    </div>
  );
};

export default App;
