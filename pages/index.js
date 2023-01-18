import Head from "next/head";

import HomePage from "../components/layout/Homepage";

const Home = () => {
    return (
        <>
            <Head>
                <title>tradevalue</title>
                {/* <meta name='description' content='Nabeel - Full Stack Developer' />
                <link rel='icon' href='/favicon.ico' /> */}
            </Head>
            <HomePage />
        </>
    )
}
export default Home;