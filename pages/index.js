import Header from "../components/home/Header/Header"
import Sidebar from "../components/home/Sidebar/Sidebar"
import Search from "../components/home/Search-stocks/Search-stocks"
import Main from "../components/home/Main-stocks/Main-stocks"

const Home = ()=>{
    return(
        <>
        <Header/>
        <Sidebar/>
        <Search/>
        <Main/>
        </>
    )
}
export default Home;