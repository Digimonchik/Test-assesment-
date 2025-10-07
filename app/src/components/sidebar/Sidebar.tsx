import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './sidebar.scss';

interface MenuItem {
    label: string;
    subItems?: MenuItem[];
}

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, items }) => {

    const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

    const toggleItem = (path: string) => {
        setOpenMap((prev) => ({ ...prev, [path]: !prev[path] }));
    };

    const renderItems = (menuItems: MenuItem[], level = 0, pathPrefix = "") => {
        return menuItems.map((item, index) => {
            const path = pathPrefix ? `${pathPrefix}-${index}` : `${index}`;
            const isOpen = !!openMap[path];
            const hasSubItems = !!item.subItems?.length;

            return (
                <div key={path} className={`menu__item level-${level}`}>
                    <div
                        className="menu__label"
                        onClick={() => hasSubItems && toggleItem(path)}
                    >
                        {item.label} {hasSubItems && <span>{isOpen ? "▼" : "▶"}</span>}
                    </div>
                    {hasSubItems && (
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="submenu"
                                >
                                    {renderItems(item.subItems!, level + 1, path)}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
            );
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="sidebar__overlay"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="sidebar__container"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {renderItems(items)}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};