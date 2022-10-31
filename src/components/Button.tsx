import React from "react";

interface buttonProps {
  buttonPadding?: string;
  buttonWidth?: string;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  buttonPadding,
  buttonWidth,
  bgColor,
  textColor,
  borderRadius,
  children,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button
      className="ctaBtn"
      type="submit"
      disabled={disabled}
      onClick={onClick}
      style={{
        width: buttonWidth,
        backgroundColor: bgColor,
        color: textColor,
        borderRadius,
        padding: buttonPadding,
      }}
    >
      {children}
    </button>
  );
}
