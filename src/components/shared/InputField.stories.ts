import type { Meta, StoryObj } from "@storybook/react";

import InputField from "./InputField";

const meta = {
  title: "Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter a Username",
  },
};

export const TextDescription: Story = {
  args: {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter a Username",
    helpDescription: "Choose a username with 5 or more characters",
  },
};

export const TextError: Story = {
  args: {
    id: "username",
    label: "Username",
    type: "text",
    value: "user",
    errorMessage: "Username must be 5 characters or more",
    className: "input-error",
  },
};

export const Password: Story = {
  args: {
    id: "password",
    label: "Password",
    type: "password",

    placeholder: "Enter a Password",
  },
};

export const PasswordDescription: Story = {
  args: {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    helpDescription:
      "Passwords are 6 characters with 1 lowercase, 1 uppercase and, 1 Number",
  },
};

export const PasswordError: Story = {
  args: {
    id: "password",
    label: "Password",
    type: "password",
    errorMessage: "Password must be a strong password",
    className: "input-error",
  },
};
