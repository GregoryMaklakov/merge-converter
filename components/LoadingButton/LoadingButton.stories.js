import { LoadingButton } from "./LoadingButton";

export default {
  title: "components/LoadingButton",
  component: LoadingButton,
};

function Template(args) {
  return <LoadingButton {...args} />;
}

export const Default = Template.bind({});
