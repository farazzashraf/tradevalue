import styles from './Header.module.css'
import { CiSearch } from 'react-icons/ci'
import { SlBell } from 'react-icons/sl'
import { RiStockFill } from 'react-icons/ri'
import { RiBitCoinFill } from 'react-icons/ri'

function Header() {
    return (
        <>
            <div className={styles.div}>
                <header className={styles.header}>
                    <div className={styles.menuflex}>
                        <aside className={styles.aside}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </aside>
                        <div className={styles.headericon}>
                            <CiSearch className={styles.icon} />
                            <SlBell className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.headericon2}>
                        <div>
                            <RiStockFill className={styles.icon2} />
                            <p>Stocks</p>
                        </div>
                        <div>
                            <RiBitCoinFill className={styles.icon2} />
                            <p>Crypto</p>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header