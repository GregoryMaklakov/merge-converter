import { ConverterForm } from "@components/ConverterForm";
import CurrencyProvider from "../utils/CurrencyContext";
import "@styles/global.scss";

export default function Home() {
    return (
        <section className="home">
            <CurrencyProvider>
                <ConverterForm />
            </CurrencyProvider>
        </section>
    );
}
