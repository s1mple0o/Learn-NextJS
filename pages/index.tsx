import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';
import Category from '../components/Category/Category';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const { i18n } = useTranslation();
  const router = useRouter();

  const goToDetailPage = () => {
    router.push({
      pathname: '/post/[postId]',
      query: {
        postId: 123,
        search: 'social'
      }
    })
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Hoàng Hiếu Nam - Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Category />

        <div>
          Current Language: {i18n.language}
        </div>
        <button
          style={{ width: '50px', padding: '5px' }}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
        <button
          style={{ width: '50px', padding: '5px' }}
          onClick={() => i18n.changeLanguage('vi')}
        >
          VI
        </button>

        <h1 className={styles.title}>
          <a>{t("home-title")}</a>
        </h1>
        <p className={styles.description}>
          {t("create-by")}:{' '}
          <code className={styles.code}>{t("my-name")}</code>
        </p>


        <div className={styles.grid}>
          <a href="/nextjs/part1" className={styles.card}>
            <h2>Kiến thức cần có &rarr;</h2>
            <p>
              •	Hiểu biết cơ bản về Client Side Rendering và Server side rendering<br />
              •	Có kiến thức cơ bản với ReacJS<br />
            </p>
          </a>

          <a href="/nextjs/part2" className={styles.card}>
            <h2>Sơ lược về Next JS &rarr;</h2>
            <p>Đã quá quen ReactJS với Client Side Rendering (CSR)<br />
              Hãy thử thực hiện Server Side Rendering (SSR) với ReactJS cụ thể là với NextJS.<br /></p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home
