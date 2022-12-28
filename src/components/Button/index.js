import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
  icbRoundedBorder17: "rounded-radius175",
  icbCustomBorderLR20:
    "rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px]",
};
const variants = {
  FillBlueA200: "bg-blue_A200 text-white_A700",
  OutlineWhiteA700:
    "bg-gray_100 border border-solid border-white_A700 text-gray_901",
  OutlineBlueA200: "border-2 border-blue_A200 border-solid text-blue_A200",
  icbOutlineGray7003f: "bg-white_A700 shadow-bs",
  icbFillBlueA200: "bg-blue_A200",
};
const sizes = {
  sm: "p-[14px] sm:p-[7px] md:p-[9px]",
  md: "md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px]",
  lg: "md:p-[24px] p-[35px] sm:px-[15px] sm:py-[18px]",
  smIcn: "sm:p-[3px] md:p-[4px] p-[7px]",
  mdIcn: "md:p-[22px] p-[32px] sm:px-[15px] sm:py-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder10",
    "icbRoundedBorder17",
    "icbCustomBorderLR20",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA200",
    "OutlineWhiteA700",
    "OutlineBlueA200",
    "icbOutlineGray7003f",
    "icbFillBlueA200",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbOutlineGray7003f",
  size: "smIcn",
};

export { Button };
