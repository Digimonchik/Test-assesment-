import React, { useState, InputHTMLAttributes } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose } from "react-icons/ai";
import './input.scss'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean;
    className?: string
}

export const Input: React.FC<InputProps> = ({ type = "text", clearable = false, value, ...rest }) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

    };

    const handleClear = () => {
        setInputValue("");

    };

    const togglePassword = () => setShowPassword(!showPassword);

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="input__wrapper">
            <input
                {...rest}
                type={inputType}
                value={inputValue}
                onChange={handleChange}
                className="input__field"
            />
            {type === "password" && (
                <span className="input__icon" onClick={togglePassword}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
            )}
            {clearable && inputValue && (
                <span className="input__clear" onClick={handleClear}>
                    <AiOutlineClose />
                </span>
            )}
        </div>
    );
};

