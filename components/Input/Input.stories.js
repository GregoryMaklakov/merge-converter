import { Input } from "./Input";

export default {
  title: "components/Input",
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const Default = Template.bind({});
