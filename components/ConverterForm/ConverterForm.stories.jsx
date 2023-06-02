import { ConverterForm } from "./ConverterForm";
import "../../styles/globals.scss";


export default {
    title: "components/ConverterForm",
    component: ConverterForm,
    decorators: [ConverterForm => <div style={{
        backgroundColor: "#44526C",
        padding: "2rem"
    }}><ConverterForm /></div>]
};

const Template = (args) => <ConverterForm {...args} />;


export const Default = Template.bind({});
Default.args = {
};