import Link from "next/link"
import styles from "./Main.module.css"

export default function Main() {
    return (
        <div className={styles["section3-flex"]}>
            <div></div>
            <section className={styles.section3}>
                <div className={styles.orders}>
                    <Link className={styles.link} href="#"><h5>Orders</h5></Link>
                    <Link className={styles.link} href="#"><h5>GTT</h5></Link>
                    <Link className={styles.link} href="#"><h5>Baskets</h5></Link>
                    <Link className={styles.link} href="#"><h5>SIP</h5></Link>
                    <Link className={styles.link} href="#"><h5>Alerts</h5></Link>
                    <Link className={styles.link} href="#"><h5>IPO</h5></Link>
                    <Link className={styles.link} href="#"><h5>Auctions</h5></Link>
                </div>
                <hr className={styles.hr} />
                <div className={styles["mainstocks-main"]}>
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
                    <Option />
                    <Option />
                    <Option />
                </div>
            </section>
        </div>
    )
}

const Option = () => (
    <div className={styles["mainstocks-main"]} >
        <div className={styles.mainstocks}>
            <div>
                <div className={styles.image}>
                    <img className={styles.img} src="./images/muthoot.png" alt="" />
                    <div className={styles["stock-name"]}>
                        <p>Muthoot Finance</p>
                        <span>&#8377;1,091.70</span>
                    </div>
                </div>
                <div className={styles.percentage}>
                    <h6>&#8377;28.65</h6>
                    <h6>2.69%</h6>
                    <span>&uarr;</span>
                </div>
            </div>
            <p>Financial Services</p>
        </div>
    </div>
)