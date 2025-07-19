```bash
filled
```
```bash
outlined
```
```bash
accented
```
```bash
thin
```

```bash
faceted-filled
```
```bash
faceted-outlined
```
```bash
faceted-accented
```
```bash
faceted-thin
```


```bash
dualtone
```
```bash
dualtone-outlined
```
```bash
dualtone-thin
```
```bash
dualtone-accented
```

```bash
faceted-dualtone-filled
```
```bash
faceted-dualtone-outlined
```
```bash
faceted-dualtone-accented
```
```bash
faceted-dualtone-thin
```

```bash
social-icons
```

# React UI Components

A collection of reusable React UI components built with TypeScript and styled with Tailwind CSS.

## Installation

```bash
npm install react-ui-components
```

## Components

### Alert

A flexible alert component with multiple variants and customization options.

#### Usage

```jsx
import { Alert } from 'react-ui-components';

function App() {
  return (
    <div>
      <Alert color="info" icon>
        This is an info alert with an icon!
      </Alert>
      
      <Alert color="warning" border dismissing>
        This is a warning alert with border and dismiss button.
      </Alert>
      
      <Alert color="success" borderAccent>
        This is a success alert with accent border.
      </Alert>
    </div>
  );
}
```

#### Props

- `color`: `'info' | 'warning' | 'danger' | 'success' | 'dark'` - Alert color theme (default: 'info')
- `icon`: `boolean` - Show icon (default: false)
- `border`: `boolean` - Show border (default: false)
- `borderAccent`: `boolean` - Show accent border (default: false)
- `dismissing`: `boolean` - Show dismiss button (default: false)
- `className`: `string` - Additional CSS classes
- `children`: `ReactNode` - Alert content

### Button

A versatile button component with multiple sizes, colors, and variants.

#### Usage

```jsx
import { Button } from 'react-ui-components';

function App() {
  return (
    <div>
      <Button color="blue" size="md">
        Default Button
      </Button>
      
      <Button color="red" outline>
        Outline Button
      </Button>
      
      <Button color="green" loading>
        Loading Button
      </Button>
      
      <Button color="purple" pill fullSized>
        Pill Full Width Button
      </Button>
    </div>
  );
}
```

#### Props

- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` - Button size (default: 'md')
- `color`: `'default' | 'alternative' | 'blue' | 'cyan' | 'dark' | 'gray' | 'green' | 'indigo' | 'light' | 'lime' | 'pink' | 'purple' | 'red' | 'teal' | 'yellow'` - Button color (default: 'default')
- `outline`: `boolean` - Outline variant (default: false)
- `fullSized`: `boolean` - Full width button (default: false)
- `grouped`: `boolean` - Grouped button styling (default: false)
- `pill`: `boolean` - Pill-shaped button (default: false)
- `loading`: `boolean` - Show loading spinner (default: false)
- `disabled`: `boolean` - Disable button (default: false)
- `className`: `string` - Additional CSS classes
- `children`: `ReactNode` - Button content
- All standard HTML button attributes are supported

## Requirements

- React 16.8.0 or higher
- Tailwind CSS (for styling)

## TypeScript Support

This package includes TypeScript definitions out of the box. No additional type packages are needed.

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/react-ui-components.git
cd react-ui-components

# Install dependencies
npm install

# Build the package
npm run build

# Run type checking
npm run typecheck

# Run linting
npm run lint
```

### Building

The package uses Rollup for bundling and supports both CommonJS and ES modules:

```bash
npm run build
```

This creates:
- `dist/index.js` - CommonJS build
- `dist/index.esm.js` - ES modules build
- `dist/index.d.ts` - TypeScript declarations

### Development Mode

```bash
npm run dev
```

This starts Rollup in watch mode for development.

## Styling

Components are styled using Tailwind CSS utility classes. Make sure you have Tailwind CSS installed and configured in your project.

### Required Tailwind Classes

The components use various Tailwind utility classes. Ensure your Tailwind build includes:

- Color utilities (bg-*, text-*, border-*)
- Spacing utilities (p-*, m-*, gap-*)
- Layout utilities (flex, items-*, justify-*)
- Interactive utilities (hover:*, focus:*, active:*)
- Dark mode utilities (dark:*)

## Browser Support

- Modern browsers with ES2020 support
- React 16.8+ (hooks support required)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run type checking and linting
6. Submit a pull request

## License

MIT License - see LICENSE file for details.