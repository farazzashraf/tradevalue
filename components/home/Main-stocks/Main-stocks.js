import Link from "next/link"
import styles from "./Main.module.css"

export default function Main() {
    return (
        <section className={styles.section3}>
            <div className={styles.orders}>
                    <div>
                        <Link className={styles.link} href="#"><h5>Orders</h5></Link>
                        <Link className={styles.link} href="#"><h5>GTT</h5></Link>
                        <Link className={styles.link} href="#"><h5>Baskets</h5></Link>
                        <Link className={styles.link} href="#"><h5>SIP</h5></Link>
                        <Link className={styles.link} href="#"><h5>Alerts</h5></Link>
                        <Link className={styles.link} href="#"><h5>IPO</h5></Link>
                        <Link className={styles.link} href="#"><h5>Auctions</h5></Link>
                    </div>
            </div>
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
        </section>
    )
}

const Option = () => (
    <div className={styles.mainstocks}>
        <div>
            <div>
                <div>
                    <img src="./images/muthoot.png" alt="" />
                    <div>
                        <p>Muthoot Finance</p>
                        <h5>&#8377;1,091.70</h5>
                    </div>
                </div>
                <div>
                    <h6>&#8377;28.65</h6>
                    <h6>2.69%</h6>
                    <span>&uarr;</span>
                </div>
            </div>
            <p>Financial Services</p>
        </div>
    </div>
)