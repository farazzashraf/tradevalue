import styles from "./Homepage.module.css"

import Header from "../home/Header/Header"
import Main from "../home/Main-stocks/Main-stocks"
import Search from "../home/Search-stocks/Search-stocks"
import Sidebar from "../home/Sidebar/Sidebar"
import Responsive from "../home/Responsive/Responsive-main"

export default function HomePage() {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <Responsive />
                <Sidebar />
                <Search />
                <Main />
            </div>
            <div>
            </div>
        </>
    )
}
