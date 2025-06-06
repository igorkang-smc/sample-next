import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const Hello: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello World Page Title</title>
        <meta property="og:title" content="Hello World" key="Title"/>
      </Head>
      <div>Hello World</div>
      <div>
        Use the HTML anchor for an
        <a href="https://nostarch.com"> external link </a>
        and the Link component for an
        <Link href='/components/weather'> internal page</Link>.
        <br/>
        <Image
          src="/next.svg"
          alt="Next logo"
          width={72}
          height={16}
        />
      </div>
    </div>
  )
}

export default Hello