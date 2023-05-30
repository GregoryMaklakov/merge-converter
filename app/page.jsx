import { ConverterForm } from "@components/ConverterForm";
import "@styles/global.scss";
import CurrencyProvider from "../utils/CurrencyContext";

export default function Home() {
    return (
        <section className="home">
            <CurrencyProvider>
                <ConverterForm />
            </CurrencyProvider>
        </section>
    );
}
