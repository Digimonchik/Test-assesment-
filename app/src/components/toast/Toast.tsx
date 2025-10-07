import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import './toast.scss';

export type ToastType = "success" | "error" | "info"

export interface ToastProps {
    message?: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
    showCloseButton?: boolean;
}

export const Toast: React.FC<ToastProps> = ({
    message,
    type = "info",
    duration = 3000,
    onClose,
    showCloseButton = true,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => onClose?.(), duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const toastVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
    };

    return (
        <AnimatePresence>
            <motion.div
                className={`toast toast__${type}`}
                variants={toastVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <span>{message}</span>
                {showCloseButton && (
                    <span className="toast__close" onClick={onClose}>
                        <AiOutlineClose />
                    </span>
                )}
            </motion.div>
        </AnimatePresence>
    );
};