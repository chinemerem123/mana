import React from "react";
const variantClasses = {
  h1: "sm:text-[21px] md:text-[23px] text-[25px]",
  h2: "text-[20px]",
  h3: "text-[17px]",
  h4: "text-[15px]",
  h5: "text-[14px]",
  h6: "font-medium text-[13px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
