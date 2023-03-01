import 'styles/globals.css'
import Layout from 'component/layout';
import type { AppProps } from "next/app";

function quizApp({ Component, pageProps }: AppProps) {
    return(
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default quizApp