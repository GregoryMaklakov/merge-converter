import { RateCard } from "../RateCard";
import "../../styles/globals.scss";

export default {
  title: "components/RateCard",
  component: RateCard,
};

function Template(args) {
  return <RateCard {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
