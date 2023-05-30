import PropTypes from "prop-types";
import { Space_Grotesk } from "next/font/google";
import { Header } from "@components/Header";
import "@styles/global.scss";


const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-spaceGrotesk",
    display: "swap",
});

export const metadata = {
    title: "Merge Converter",
    description: "Description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={spaceGrotesk.variable}>
                <div className="container">
                    <Header />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.node,
};
