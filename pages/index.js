import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { title } from '../components/header'
import utilStyles from '../styles/utils.module.css'
import presentation from '../styles/presentation.module.css'
import graphique from '../styles/graphique.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import timeline from '../styles/timeline.module.css'
import ico from '../styles/ico.module.css'
import Card from '../components/card'
import MapMonde from '../components/map'
import mapStyle from '../styles/map.module.css'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  // document.querySelector("body").classList.add(utilStyles.backgroundSuite);
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
        <section className={`${utilStyles.headingGlobal}`}>
          <div className={`${utilStyles.titleBox}  ${utilStyles.displayFlex}`}>
            <div className={utilStyles.textPresentation}>
              <h1 className={`${utilStyles.h1} ${utilStyles.colorText}`}>
                Share your art, earn money
              </h1>
              <h4 className={utilStyles.colorWhite}>
                Become a blockchain player and let the community award you
              </h4>
              <div className={utilStyles.displayFlex}>
                <Link href={`ico`}>
                  <a className={utilStyles.importantButton}>
                    Participate in ICO
                  </a>
                </Link>
                <Link href={`litePaper`}>
                  <a className={utilStyles.lightButton}>
                    Litepaper
                  </a>
                </Link>
              </div>
            </div>
            <div className={utilStyles.imageExplication}>
              {/* <Image
                priority
                src="/images/circle_explication_big.svg"
                width={600}
                height={515}
                alt="Explication of the project"
              /> */}
              <MapMonde></MapMonde>
            </div>
          </div>
        </section>
        <section className={`${presentation.grid} ${utilStyles.backgroundSuite}`}>
          <div className={presentation.boxText}>
            <h2 className={`${presentation.h2}`}>Join the revolution</h2>
            <p className={presentation.paragraphe}>Turn your free time into money. In return for likes we allow our users to generate money and reward the artist and the commun user.</p>
            <p className={presentation.paragraphe}>Rewards will be distributed every day</p>
          </div>
          <div className={graphique.global}>
            <Image 
              priority
              src="/images/lifecycle_v2.svg"
              layout='responsive'
              width={790}
              height={450}
              alt="Lifecycle of project"
            />
          </div>
        </section>
        <section className={`${ico.global} ${utilStyles.backgroundSuite}`}>
          <div className={ico.subGlobal}>
            <h2 className={`${presentation.h2}`}>ICO in progress</h2>
            <p className={presentation.paragraphe}>Pick your investment strategy</p>
            <p className={presentation.lightParagraphe}>You can choose any of this round. It's up to you</p>
          </div>
          <div className={ico.displayFlex}>
            <Card title={"Seed Round"}></Card>
            <Card title={"Public Round 1"}></Card>
            <Card title={"Public Round 2"}></Card>
          </div>
        </section>
        <section className={`${timeline.global} ${utilStyles.backgroundSuite}`}>

        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.backgroundSuite}`}>
          <h2 className={utilStyles.headingLg}>FAQ</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`posts/${id}`}>
                  <a>
                    {title}
                  </a>
                </Link>
                <br />
                {id}
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date}/>
                </small>
              </li>
            ))}
          </ul>
        </section>
    </Layout>
  )
}

