import { ConverterForm } from "./ConverterForm";
import "../../styles/globals.scss";


export default {
    title: "components/ConverterForm",
    component: ConverterForm,
};

const Template = (args) => <ConverterForm {...args} />;


export const Default = Template.bind({});
Default.args = {
};