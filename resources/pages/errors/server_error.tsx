import { Head } from '@inertiajs/react'

export default function ServerError({ error }: { error: { code: number } }) {
  console.log('Server Error', { error })
  return (
    <>
      <Head title={`${error.code}`} />
      <h1>{error.code} - Server error </h1>
      <p>
        This template is rendered by the
        <a href="http://docs.adonisjs.com/guides/exception-handling#status-pages">
          status pages feature
        </a>
        of the global exception handler.
      </p>
    </>
  )
}
