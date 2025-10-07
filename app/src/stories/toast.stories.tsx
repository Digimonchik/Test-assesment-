import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-webpack5";
import { Toast } from "../components/toast/Toast.tsx"
import { ToastProps } from "../components/toast/Toast.tsx";

export default {
    title: "Components/Toast",
    component: Toast,
} as Meta;

const Template: StoryFn<ToastProps> = (args) => {
    const [show, setShow] = useState(true);
    return show ? (
        <Toast
            {...args}
            onClose={() => setShow(false)}
        />
    ) : (
        <button onClick={() => setShow(true)}>Show Toast</button>
    );
};

export const Success = Template.bind({});
Success.args = { message: "Operation successful!", type: "success", duration: 6000 };

export const Error = Template.bind({});
Error.args = { message: "Something went wrong.", type: "error", duration: 6000 };

export const Info = Template.bind({});
Info.args = { message: "Here's some info.", type: "info", duration: 6000, showCloseButton: false };