import { SwapCard } from "./SwapCard";
import "../../styles/globals.scss";

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
  decorators: [SwapCard => <div style={{
    backgroundColor: "#44526C",
    padding: "2rem"
  }}><SwapCard /></div>]
};

function Template(args) {
  return <SwapCard {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  icon: "bitcoin",
  convertFrom: "BTC",
};
