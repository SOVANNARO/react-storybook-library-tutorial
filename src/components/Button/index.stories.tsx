import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button/index.tsx";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
  }
}