import "../../styles/global.scss";
import { RateCard } from "./RateCard";
import "./RateCard.module.scss";

export default {
  title: "components/RateCard",
  component: RateCard,
  argTypes: {
    rate: {
      options: "11,969.02",
      control: { type: "select" },
    },
  },
};

const Template = (args) => <RateCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  fromCurrency: "BTC",
  toCurrency: "UAH",
  rate: "11,969.02",
};
