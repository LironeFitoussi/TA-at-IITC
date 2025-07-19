# Simple Component Library

A minimal React component library demonstrating reusability with clean, simple components.

## 📁 Structure

```
src/components/
├── index.ts                 # Exports
├── README.md               # This file
│
├── Core Components         # Base components
│   ├── Button.tsx         # Simple button with variants
│   ├── InputGroup.tsx     # Form input with validation
│   └── Card.tsx           # Reusable container component
│
├── Layout Components       # Page structure
│   ├── Header.tsx         # Page header
│   └── Footer.tsx         # Page footer
│
└── Main Component         # Page orchestrator
    └── LandingPage.tsx    # Main page with examples
```

## 🎯 Component Hierarchy

```
App.tsx
└── LandingPage.tsx
    ├── Header.tsx
    ├── Button Examples Section
    │   ├── Card (Button Variants)
    │   │   └── Button components
    │   └── Card (Button Sizes)
    │       └── Button components
    ├── Input Examples Section
    │   └── Card (Input Examples)
    │       └── Card components (nested)
    │           └── InputGroup components
    ├── Simple Form Section
    │   └── Card (Contact Form)
    │       ├── InputGroup components
    │       └── Button component
    └── Footer.tsx
```

## 🚀 Key Features

### 1. **Three Core Components**
- **Button**: Variants, sizes, and states
- **InputGroup**: Form inputs with validation
- **Card**: Reusable container with consistent styling

### 2. **Simple & Clean**
- Minimal number of components
- Clear, focused functionality
- Easy to understand and use

### 3. **Component Composition**
- Cards can contain other components
- Components work together seamlessly
- Demonstrates reusability clearly

### 4. **TypeScript Support**
- Full type safety
- Clear interfaces for all props
- Better development experience

## 📝 Usage Examples

### Card Component
```typescript
// Basic card
<Card>
  <p>Simple content</p>
</Card>

// Card with title
<Card title="My Section">
  <p>Content with title</p>
</Card>

// Card with different padding
<Card title="Compact" padding="small">
  <p>Less padding</p>
</Card>
```

### Button Component
```typescript
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>

<Button variant="outline" size="large" disabled>
  Disabled
</Button>
```

### InputGroup Component
```typescript
<InputGroup
  label="Email"
  type="email"
  placeholder="Enter email"
  error="Email is required"
  required
/>
```

### Component Composition
```typescript
// Card containing other components
<Card title="Form Example">
  <InputGroup label="Name" placeholder="Enter name" />
  <Button variant="primary">Submit</Button>
</Card>

// Nested cards
<Card title="Examples">
  <Card title="Button Variants" padding="small">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </Card>
</Card>
```

## 🎨 Styling

- **Simple CSS**: Basic colors and spacing
- **Consistent**: Same look across all components
- **Responsive**: Works on mobile and desktop
- **Minimal**: No unnecessary visual effects

## 🏆 Reusability Benefits

### 1. **Consistency**
- All sections use the same Card component
- Uniform styling across the application
- Easy to maintain visual consistency

### 2. **Simplicity**
- Only 3 core components to learn
- Clear, focused functionality
- Easy to understand and modify

### 3. **Flexibility**
- Components can be used in any combination
- Cards can contain any content
- Easy to extend and customize

### 4. **Maintainability**
- Few components to maintain
- Clear component boundaries
- Easy to update and improve

This demonstrates how a few well-designed components can create a complete, reusable system. 