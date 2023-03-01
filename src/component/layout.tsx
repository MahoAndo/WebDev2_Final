import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>template</title>
            </Head>
            <div className="content">{children}</div>
            <footer className=""></footer>
        </div>
    )
}

export default layout