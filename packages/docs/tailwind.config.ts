import containerQueries from '@tailwindcss/container-queries'
import { docsUi, docsUiPlugins } from 'next-docs-ui/tailwind-plugin'
import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'
import { CustomThemeConfig } from 'tailwindcss/types/config'

const shadcnThemeExtension: Partial<CustomThemeConfig> = {
  colors: {
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))'
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))'
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))'
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))'
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))'
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))'
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))'
    }
  },
  borderRadius: {
    lg: `var(--radius)`,
    md: `calc(var(--radius) - 2px)`,
    sm: 'calc(var(--radius) - 4px)'
  },
  fontFamily: {
    sans: ['var(--font-sans)', ...fontFamily.sans]
  },
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' }
    }
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out'
  }
}

const tailwindConfig: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.tsx',
    './content/**/*.mdx',
    './content/**/*.tsx',
    './mdx-components.tsx',
    './node_modules/next-docs-ui/dist/**/*.js'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      ...shadcnThemeExtension
    }
  },
  plugins: [tailwindAnimate, containerQueries, ...docsUiPlugins, docsUi]
}

export default tailwindConfig
