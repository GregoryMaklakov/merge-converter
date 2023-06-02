import { LoadingButton } from "./LoadingButton";
import "../../styles/globals.scss";

export default {
  title: "components/LoadingButton",
  component: LoadingButton,
};

function Template(args) {
  return <LoadingButton {...args} />;
}

export const Default = Template.bind({});
