import { ThemeContext } from './ThemeContext';

export const defaultTheme: ThemeContext = {
  root: {
    '--trc-trc-primary': '#1d4ed8',
    '--trc-secondary': '#eab308',
    '--trc-background-primary': 'white',
    '--trc-background-secondary': '#cbd5e1',
    '--trc-text-color': '#0f172a',
    '--trc-text-color-inverse': '#fff',
    '--trc-heading-color': '#020617',
    '--trc-link-color': '#6d28d9',
    '--trc-border-color': '#e2e8f0',
    '--trc-error-color': '#e11d48',
    '--trc-success-color': '#059669',
    '--trc-warning-color': '#d97706',
    '--trc-font-family': 'Arial, sans-serif',
    '--trc-font-size-base': '16px',
    '--trc-font-size-xl': '24px',
    '--trc-font-size-lg': '20px',
    '--trc-font-size-sm': '14px',
    '--trc-font-size-xs': '12px',
    '--trc-font-weight-normal': '400',
    '--trc-font-weight-bold': '700',
    '--trc-spacing-xs': '0.25rem',
    '--trc-spacing-sm': '0.5rem',
    '--trc-spacing-md': '1rem',
    '--trc-spacing-lg': '1.5rem',
    '--trc-spacing-xl': '2rem',
    '--trc-border-radius': '1rem',
    '--trc-button-height': '2.5rem',
    '--trc-input-height': '2.5rem',
    '--trc-box-shadow-sm': '0 1px 2px rgba(0,0,0,0.1)',
    '--trc-box-shadow-md': '0 2px 4px rgba(0,0,0,0.2)',
    '--trc-box-shadow-lg': '0 4px 8px rgba(0,0,0,0.3)',
    '--trc-border-width': '1px',
    '--trc-container-min-width': '480px',
    '--trc-container-max-width': '1400px'
  },
  container: {
    // Do not set min-width otherwise @media queries won't be applied
    padding: 'var(--trc-spacing-lg)',
    backgroundColor: 'var(--trc-background-primary)',
    border: 'var(--trc-border-width) solid var(--trc-border-color)',
    rounded: {
      // Do not set border-radius otherwise @media queries won't be applied
      boxShadow: 'var(--trc-box-shadow-sm)'
    },
    fullHeight: {
      minHeight: 'calc(100vh - var(--trc-spacing-xl) - 1px)', // -1px to avoid scrollbars
      border: 'none',
      maxWidth: 'var(--trc-container-max-width)',
      margin: '0 auto'
    }
  },
  form: {
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      flexWrap: 'wrap',
      gap: 'var(--trc-spacing-md)'
    },
    field: {
      height: 'var(--trc-input-height)',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: 'var(--trc-spacing-xs)',
      marginBottom: 'var(--trc-spacing-md)'
    },
    fieldLabel: {
      minHeight: 'var(--trc-spacing-md)' /* use the space when the label is blank */,
      fontSize: 'var(--trc-font-size-xs)',
      lineHeight: '1.5',
      fontWeight: 'var(--trc-font-weight-bold)'
    },
    fieldMessage: {
      color: 'var(--trc-error-color)',
      fontSize: 'var(--trc-font-size-xs)',
      fontStyle: 'italic',
      lineHeight: 'var(--trc-spacing-md)'
    },
    actions: {
      marginTop: 'var(--trc-spacing-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      gap: 'var(--trc-spacing-sm)'
    }
  },
  badge: {
    fontSize: 'var(--trc-font-size-xs)',
    capsule: {
      // Do not set backgroundColor because the Badge component receives a prop for this
      padding: 'var(--trc-spacing-xs) var(--trc-spacing-lg)',
      borderRadius: 'var(--trc-border-radius)',
      color: 'var(--trc-text-color-inverse)'
    },
    dot: {
      // Do not set backgroundColor because the Badge component receives a prop for this
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      color: 'var(--trc-text-color)',
      marginRight: 'var(--trc-spacing-xs)'
    }
  }
};
