import Head from "next/head";
import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";

export const title = "UwU - The cutest token";
const description = "UwU is the cutest token, it rewards photographers for the most beautiful pictures"


export default function Header({children, home, litepaper, earn, ico}) {
    return (

        <div className={styles.global}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content={description}/>
                <meta name="og:title" content={title}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                <Link href={`/`}>
                    <a>
                        <div className={styles.logo}>
                            <Image
                                priority
                                src="/images/uwuLogo.png"
                                className={styles.logoImg}
                                height={25}
                                width={26}
                                alt={title}
                            />
                        </div>
                    </a>
                </Link>
                <Link href={`/`}>
                    <a>
                        {home ? (
                            <div className={`${styles.button} ${styles.active}`}>
                                Homepage
                            </div>
                        ) : (
                            <div className={styles.button}>
                                Homepage
                            </div>
                        )}
                    </a>
                </Link>
                <Link href={`/litepaper`}>
                    <a>
                        {litepaper ? (
                            <div className={`${styles.button} ${styles.active}`}>
                                Litepaper
                            </div>
                        ) : (
                            <div className={styles.button}>
                                Litepaper
                            </div>
                        )}
                    </a>
                </Link>
                <Link href={`/earn`}>
                    <a>
                        {earn ? (
                            <div className={`${styles.button} ${styles.active}`}>
                                Earn token
                            </div>
                        ) : (
                            <div className={styles.button}>
                                Earn token
                            </div>
                        )}
                    </a>
                </Link>
                <Link href={`/ico`}>
                    <a>
                        {ico ? (
                            <div className={`${styles.button} ${styles.active}`}>
                                Participate in ICO
                            </div>
                        ) : (
                            <div className={styles.button}>
                                Participate in ICO
                            </div>
                        )}
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>

    )
}