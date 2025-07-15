import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Badge from './components/Badge';
import Input from './components/Input';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const features = [
    {
      icon: '🎨',
      title: 'Utility-First CSS',
      description: 'Build custom designs without leaving your HTML. Rapidly build modern websites without ever leaving your HTML.'
    },
    {
      icon: '⚡',
      title: 'Responsive Design',
      description: 'Every utility class in Tailwind can be applied conditionally at different breakpoints, making it a piece of cake to build complex responsive interfaces.'
    },
    {
      icon: '🎯',
      title: 'Component-Friendly',
      description: 'While Tailwind provides utility classes, it doesn\'t encourage you to write HTML that looks like this. Components are extracted using @apply.'
    },
    {
      icon: '🔧',
      title: 'Developer Experience',
      description: 'IntelliSense, linting, error checking, and formatting. Tailwind CSS IntelliSense enhances the Tailwind development experience.'
    }
  ];

  const stats = [
    { label: 'Components', value: '50+' },
    { label: 'Utility Classes', value: '500+' },
    { label: 'Responsive Breakpoints', value: '5' },
    { label: 'Color Palette', value: '90+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Tailwind Basics</h1>
              </div>
              <Badge variant="primary">v4.0</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">Documentation</Button>
              <Button variant="primary" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="success" size="lg" className="mb-4">
              ✨ Latest Version Available
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Tailwind CSS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                The Right Way
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 
              that can be composed to build any design, directly in your markup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Learning
              </Button>
              <Button variant="outline" size="lg">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tailwind CSS?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make Tailwind CSS the most popular utility-first CSS framework.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Components
            </h2>
            <p className="text-xl text-gray-600">
              See our reusable components in action with different variants and states.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Button Demo */}
            <Card title="Button Variants" subtitle="Different button styles and sizes">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" disabled>Disabled</Button>
                  <Badge variant="warning">Loading...</Badge>
                </div>
              </div>
            </Card>

            {/* Badge Demo */}
            <Card title="Badge Variants" subtitle="Status indicators and labels">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary" size="sm">Small</Badge>
                  <Badge variant="primary" size="md">Medium</Badge>
                  <Badge variant="primary" size="lg">Large</Badge>
                </div>
              </div>
            </Card>

            {/* Form Demo */}
            <Card title="Form Elements" subtitle="Input fields with validation" className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  label="Disabled Field"
                  placeholder="This field is disabled"
                  disabled
                />
                <Input
                  label="Error Field"
                  placeholder="This field has an error"
                  error="This field is required"
                />
              </div>
              <div className="mt-6">
                <Button variant="primary">Submit Form</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tailwind Basics</h3>
              <p className="text-gray-400">
                Learn Tailwind CSS with practical examples and reusable components.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tailwind Basics. Built with ❤️ and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
