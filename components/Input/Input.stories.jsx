import { Input } from "./Input";
import "../../styles/globals.scss";

export default {
  title: "components/Input",
  component: Input,
  decorators: [Input => <div style={{
    backgroundColor: "#10161D",
    padding: "2rem"
  }}><Input /></div>]
};

function Template(args) {
  return <Input {...args} />;
}

export const Default = Template.bind({});
