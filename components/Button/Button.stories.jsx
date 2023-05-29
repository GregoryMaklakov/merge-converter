import { Button } from "./Button";
import { ICON_TYPES } from "@components/Icon/Icon";

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
            control: { type: 'select' },
        },
    },
    args: {
        variant: "primary",
        icon: ICON_TYPES.filter,
    },
};
function Template(args) {
    return <Button primary {...args} />;
}

export const Primary = Template.bind({});
