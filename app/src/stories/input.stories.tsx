import React from "react";
import { Meta, StoryFn } from '@storybook/react-webpack5'
import { Input, InputProps } from "../components/Input/Input.tsx";

export default {
    title: "Components/Input",
    component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: "text",
    placeholder: "Enter text",
    clearable: true,
};

export const Password = Template.bind({});
Password.args = {
    type: "password",
    placeholder: "Enter password",
    clearable: true,
};

export const Number = Template.bind({});
Number.args = {
    type: "number",
    placeholder: "Enter number",
    clearable: false,
};