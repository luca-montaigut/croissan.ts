import { createRoot } from 'react-dom/client'
import { Head, createInertiaApp } from '@inertiajs/react'
import RootContext from './components/root_context'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    return pages[`./pages/${name}.tsx`]
  },

  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <RootContext>
        <App {...props} />
      </RootContext>
    )
  },
})
