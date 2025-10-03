import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 dark:ring-offset-slate-950',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-slate-50 hover:bg-slate-800/90 focus-visible:ring-slate-950 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300',
        primary:
          'relative bg-gradient-to-r from-gray-900 to-black text-white hover:from-gray-800 hover:to-gray-900 focus-visible:ring-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:p-[2px] before:bg-gradient-to-r before:from-red-500 before:via-purple-500 before:to-pink-500 before:content-[""] before:-z-10',
        success:
          'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500 shadow-lg hover:shadow-xl transition-shadow',
        warning:
          'bg-orange-1 text-white hover:bg-orange-1/90 focus-visible:ring-orange-1 shadow-lg hover:shadow-xl transition-shadow',
        danger:
          'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500 shadow-lg hover:shadow-xl transition-shadow',
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90 focus-visible:ring-red-500',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300',
        'outline-primary':
          'relative bg-transparent text-white border-2 border-transparent hover:bg-gradient-to-r hover:from-gray-900/20 hover:to-black/20 focus-visible:ring-gray-800 before:absolute before:inset-0 before:rounded-[inherit] before:p-[2px] before:bg-gradient-to-r before:from-red-500 before:via-purple-500 before:to-pink-500 before:content-[""] before:-z-10',
        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-100/80 focus-visible:ring-slate-950 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 dark:focus-visible:ring-slate-300',
        ghost:
          'hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300',
        'ghost-primary':
          'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-gray-900/10 hover:to-black/10 hover:text-white focus-visible:ring-gray-800',
        link: 'text-slate-900 underline-offset-4 hover:underline focus-visible:ring-slate-950 dark:text-slate-50 dark:focus-visible:ring-slate-300',
      },
      size: {
        xs: 'h-8 rounded px-2 text-xs',
        sm: 'h-9 rounded-md px-3',
        default: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    // Don't render icons when using asChild to avoid conflicts
    const shouldRenderIcons = !asChild;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {shouldRenderIcons && loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {shouldRenderIcons && !loading && leftIcon && (
          <span className="mr-2 flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span className={cn(loading && loadingText && 'sr-only')}>
          {children}
        </span>
        {loading && loadingText && (
          <span>{loadingText}</span>
        )}
        {shouldRenderIcons && !loading && rightIcon && (
          <span className="ml-2 flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
