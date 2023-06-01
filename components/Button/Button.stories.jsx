import { Button } from "./Button";
import { ICON_TYPES } from "../Icon/Icon";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "subtle"],
      control: { type: "radio" },
    },
    icon: {
      options: Object.values(ICON_TYPES),
      control: { type: "select" },
    },
  },
  args: {
    variant: "primary",
    icon: ICON_TYPES.swap,
  },
};

function Template(args) {
  return <Button primary {...args} />;
}

export const Swap = Template.bind({});

export const Refresh = Template.bind({});
Refresh.args = {
  variant: "subtle",
  icon: ICON_TYPES.refresh,
};
