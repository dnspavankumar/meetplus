# Enhanced Button Component Documentation

## Overview

The enhanced Button component is a highly flexible and accessible button implementation built on top of Radix UI's Slot component and styled with Tailwind CSS using class-variance-authority (CVA). It's specifically optimized for video chat applications with dark themes.

## Features

### ✨ New Features Added

- **Loading States**: Built-in loading spinner with customizable loading text
- **Icon Support**: Left and right icon props with proper spacing
- **Video Chat Variants**: Theme-specific variants (primary, success, warning, danger)
- **Enhanced Accessibility**: Improved ARIA attributes and screen reader support
- **Better Animations**: Smooth transitions, hover effects, and press feedback
- **Additional Sizes**: Extra small (xs) and extra large (xl) sizes
- **Full Width Option**: Easy full-width button support

## API Reference

### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Styling
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'destructive' | 
           'outline' | 'outline-primary' | 'secondary' | 'ghost' | 'ghost-primary' | 'link'
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'icon' | 'icon-sm' | 'icon-lg'
  
  // Layout
  fullWidth?: boolean
  asChild?: boolean
  
  // Loading
  loading?: boolean
  loadingText?: string
  
  // Icons
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
```

### Variants

#### Theme Variants (Recommended for Video Chat App)
- **`primary`**: Red/Purple gradient theme - for main actions
- **`success`**: Green color - for positive actions (join meeting, enable camera)
- **`warning`**: Orange color - for warning actions
- **`danger`**: Red color - for destructive actions (end call, leave meeting)

#### Standard Variants
- **`default`**: Standard dark/light theme button
- **`destructive`**: Alternative red variant
- **`outline`**: Bordered button with transparent background
- **`outline-primary`**: Bordered button with primary color
- **`secondary`**: Subtle background button
- **`ghost`**: Transparent button with hover effects
- **`ghost-primary`**: Transparent button with primary color
- **`link`**: Text-only button with underline

### Sizes

- **`xs`**: 32px height - for compact spaces
- **`sm`**: 36px height - small buttons
- **`default`**: 40px height - standard size
- **`lg`**: 44px height - larger buttons
- **`xl`**: 48px height - hero/prominent actions
- **`icon`**: 40x40px - square icon button
- **`icon-sm`**: 32x32px - small icon button
- **`icon-lg`**: 48x48px - large icon button

## Usage Examples

### Basic Usage

```tsx
import { Button } from '@/components/ui/button';

// Simple button
<Button>Click me</Button>

// Primary variant for main actions
<Button variant="primary">Join Meeting</Button>

// Success variant for positive actions
<Button variant="success">Start Video</Button>
```

### Loading States

```tsx
const [loading, setLoading] = useState(false);

// Basic loading
<Button loading={loading} onClick={() => setLoading(true)}>
  Join Meeting
</Button>

// Loading with custom text
<Button 
  loading={loading} 
  loadingText="Joining..."
  onClick={() => setLoading(true)}
>
  Join Meeting
</Button>
```

### With Icons

```tsx
import { Video, Mic, Copy } from 'lucide-react';

// Left icon
<Button variant="primary" leftIcon={<Video className="h-4 w-4" />}>
  Start Video
</Button>

// Right icon
<Button variant="outline" rightIcon={<Copy className="h-4 w-4" />}>
  Copy Link
</Button>

// Both icons
<Button 
  variant="warning" 
  leftIcon={<Users className="h-4 w-4" />} 
  rightIcon={<Settings className="h-4 w-4" />}
>
  Manage Participants
</Button>

// Icon only
<Button size="icon" variant="ghost">
  <Mic className="h-4 w-4" />
</Button>
```

### Video Chat Specific Examples

```tsx
// Join meeting button
<Button 
  variant="success" 
  size="lg" 
  fullWidth
  leftIcon={<Phone className="h-5 w-5" />}
>
  Join Meeting
</Button>

// End call button
<Button 
  variant="danger" 
  leftIcon={<PhoneOff className="h-5 w-5" />}
>
  End Call for Everyone
</Button>

// Meeting controls
<div className="flex gap-2">
  <Button size="icon" variant="ghost" className="bg-dark-3">
    <Video className="h-5 w-5" />
  </Button>
  <Button size="icon" variant="ghost" className="bg-dark-3">
    <Mic className="h-5 w-5" />
  </Button>
  <Button size="icon" variant="danger">
    <PhoneOff className="h-5 w-5" />
  </Button>
</div>
```

### Advanced Usage

```tsx
// As child component (renders as different element)
<Button asChild>
  <Link href="/meeting">Join Meeting</Link>
</Button>

// Full width with loading
<Button 
  variant="primary" 
  fullWidth 
  loading={isCreating}
  loadingText="Creating meeting..."
>
  Create Instant Meeting
</Button>

// Custom styling
<Button 
  variant="ghost" 
  className="bg-dark-3 hover:bg-dark-4"
  size="icon"
>
  <Settings className="h-4 w-4" />
</Button>
```

## Accessibility Features

- **ARIA attributes**: `aria-busy`, `aria-disabled`, `aria-hidden` for icons
- **Screen reader support**: Loading text and icon descriptions
- **Keyboard navigation**: Full keyboard support with focus indicators
- **Focus management**: Proper focus rings and offset
- **Semantic HTML**: Uses proper button elements

## Best Practices

1. **Use semantic variants**: Choose variants that match the action's intent
2. **Consistent sizing**: Use consistent sizes within the same interface section
3. **Loading states**: Always provide loading states for async operations
4. **Icon accessibility**: Use appropriate icon sizes and ensure they're hidden from screen readers
5. **Color contrast**: The variants are designed for dark themes - test in your specific context

## Migration from Old Button

The enhanced button is backward compatible. Existing usage will continue to work, but you can gradually adopt new features:

```tsx
// Old usage (still works)
<Button className="bg-red-500">Join Meeting</Button>

// New recommended usage
<Button variant="primary">Join Meeting</Button>
```

## Testing

Visit `/button-test` to see all variants and features in action, or import the `ButtonExamples` component for testing in your development environment.
