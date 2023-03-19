import { Inter } from 'next/font/google'
import styles from '../../page.module.css'

const inter = Inter({ subsets: ['latin'] })

function Card(props: any) {
  const { title, url, body } = props
    return (
        <a
        href={url}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          {title} <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          { body }
        </p>
      </a>
    )
}

export default Card;