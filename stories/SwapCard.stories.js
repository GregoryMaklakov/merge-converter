import { SwapCard } from "@components/SwapCard";

export default {
  title: "components/SwapCard",
  component: SwapCard,
  argTypes: {
    icon: {
      options: ["bitcoin", "flag"],
      control: { type: "select" },
    },
    convertFrom: {
      options: ["BTC", "UAH"],
      control: { type: "select" },
    },
  },
};

function Template(args) {
  return <SwapCard style={{ width: "440px" }} {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  icon: "bitcoin",
  convertFrom: "BTC",
};
