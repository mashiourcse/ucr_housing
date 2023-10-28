import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-bl-[5px] rounded-br-none rounded-tl-[5px] rounded-tr-none",
  square: "rounded-none",
};
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-blue_gray-900",
    deep_orange_600: "bg-deep_orange-600 text-white-A700",
    gray_100_01: "bg-gray-100_01",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-[18px]", sm: "p-[21px] sm:px-5", md: "px-5 py-[27px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_50",
    "deep_orange_600",
    "gray_100_01",
    "white_A700",
  ]),
};

export { Button };
