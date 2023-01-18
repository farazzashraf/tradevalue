import Link from 'next/link'

import { AiOutlineArrowRight } from 'react-icons/ai'
import styles from './Responsive-main.module.css'

export default function Responsive() {
    return (
        <div className={styles.main_responsive}>
            <div className={styles.stocks_insight}>
                <Link className={styles.link} href="#">
                    <div className={styles.stocks}>
                        <p>Stocks</p>
                    </div>
                </Link>
                <Link className={styles.link} href="#">
                    <div className={styles.insights}>
                        <p>Insights</p>
                    </div>
                </Link>
            </div>
            <div className={styles.pages}>
                <p>Page 1 of 11</p>
                <div>
                    <AiOutlineArrowRight className={styles.arrow} />
                </div>
            </div>
        </div>
    )
}