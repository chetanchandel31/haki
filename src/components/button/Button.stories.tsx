import { ComponentStory, ComponentMeta } from "@storybook/react";
import HakiProvider from "../HakiProvider/HakiProvider";

import Button from "./button";

/* the component */

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Button>;

/* different instances of our component */

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <HakiProvider>
    <Button {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Default Button",
  as: "a",
};
