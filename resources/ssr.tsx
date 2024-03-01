import { createInertiaApp } from '@inertiajs/react'
import ReactDOMServer from 'react-dom/server'
import RootContext from './components/root_context'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
      return pages[`./pages/${name}.tsx`]
    },
    setup: ({ App, props }) => (
      <RootContext>
        <App {...props} />
      </RootContext>
    ),
  })
}
