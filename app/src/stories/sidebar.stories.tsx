import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-webpack5";
import { SidebarMenu } from "../components/sidebar/Sidebar.tsx";

export default {
    title: "Components/SidebarMenu",
    component: SidebarMenu,
} as Meta;

const Template: StoryFn = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: "Menu" },
        {
            label: "Items_level_1",
            subItems: [
                { label: "Item" },
                { label: "Item" },
                {
                    label: "Items_level_2",
                    subItems: [
                        { label: "item" },
                        { label: "item" }
                    ]
                }
            ]
        },
        { label: "Footer" }
    ];

    return (
        <>
            <button onClick={() => setOpen(true)}>Open Sidebar</button>
            <SidebarMenu isOpen={open} onClose={() => setOpen(false)} items={menuItems} />
        </>
    );
};

export const Default = Template.bind({});