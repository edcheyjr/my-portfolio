import Loading from '@components/Loading'

export default async function lodaing() {
  let array = new Array(5).fill(1)
  return (
    <main className='h-screen w-full'>
      <Loading />
    </main>
  )
}
