// Global design tokens for Sio portfolio
// Use these to keep colors & typography consistent across the app.

export const themeColors = {
  primary: {
    base: 'blue-600',
    light: 'blue-400',
    dark: 'blue-700',
    softBg: 'bg-blue-600',
    softBgHover: 'hover:bg-blue-700',
    badgeBg: 'bg-blue-100 dark:bg-blue-900',
    badgeText: 'text-blue-700 dark:text-blue-300',
  },
  neutral: {
    text: 'text-slate-700 dark:text-slate-300',
    border: 'border-slate-300 dark:border-slate-600',
    chipBg: 'bg-slate-100 dark:bg-slate-800',
  },
};

// Common Tailwind class presets for buttons/chips etc.
export const themeComponents = {
  buttonPrimary:
    'bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl',
  buttonPrimarySoft:
    'bg-slate-700 dark:bg-slate-600 text-white hover:bg-slate-800 dark:hover:bg-slate-500 transition-colors',
  buttonOutline:
    'bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300',
  chipPrimary:
    'px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full',
  chipTech:
    'px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded',
};

export const themeFonts = {
  heading: 'font-bold tracking-tight',
  body: 'text-slate-600 dark:text-slate-300',
};

