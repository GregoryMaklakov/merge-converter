import { Input } from "./Input";
import "../../styles/globals.scss";

export default {
  title: "components/Input",
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const Default = Template.bind({});
