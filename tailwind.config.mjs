/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  safelist: [
    // Filter button active/inactive states toggled by JS
    'bg-stone-900', 'border-stone-900',
    'bg-blue-600', 'border-blue-600',
    'bg-emerald-600', 'border-emerald-600',
    'bg-amber-600', 'border-amber-600',
    'text-stone-600', 'text-blue-700', 'text-emerald-700', 'text-amber-700',
    'border-stone-200', 'border-blue-200', 'border-emerald-200', 'border-amber-200',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf8f5',
        brand: '#9f1239',
      },
    },
  },
};
