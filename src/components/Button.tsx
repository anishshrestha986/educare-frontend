import React from "react";

interface buttonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

export default function Button({
  className,
  style,
  children,
  disabled,
  onClick,
  onBlur,
}: buttonProps) {
  return (
    <button
      className={className ? className : "ctaBtn"}
      type="submit"
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
      style={style}
    >
      {children}
    </button>
  );
}
