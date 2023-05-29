import "@styles/global.scss"
import PropTypes from "prop-types"
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-spaceGrotesk',
    display: 'swap',
});

export const metadata = {
    title: "Merge Converter",
    description: "Some description",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body suppressHydrationWarning={true} className={spaceGrotesk.variable}>
                <main className="container">
                    {children}
                </main>
            </body>
        </html>
    )
}

RootLayout.propTypes = {
    children: PropTypes.node,
}