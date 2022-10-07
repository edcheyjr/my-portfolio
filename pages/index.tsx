import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to Ed&apos;s World</title>
        <meta
          name='decription'
          content='Edwin is a software engineer come and see his works'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container mx-auto px-4 lg:px-6 py-4'>
        {/* Header */}
        <Header />

        {/* Hero */}

        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contac Me */}
      </div>
    </div>
  )
}

export default Home
