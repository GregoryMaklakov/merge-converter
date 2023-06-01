import { Icon, ICON_TYPES } from "./Icon";
const iconNames = Object.keys(ICON_TYPES);

export default {
  title: "components/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: ICON_TYPES,
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "range", min: 10, max: 100 },
    },
  },
};

function Template(args) {
  return <Icon {...args} />;
}

export const Logo = Template.bind({});
Logo.args = {
  name: "logo",
  size: 200,
  color: "white",
};

export function Multiple() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      {iconNames.map((icon) => (
        <div key={icon} style={{ margin: "18px" }}>
          <Icon size={32} name={icon} color="white" />
        </div>
      ))}
    </div>
  );
}
