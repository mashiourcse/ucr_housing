import React from "react";

const sizeClasses = {
  txtInterRegular14Gray90087: "font-inter font-normal",
  txtDMSansBold23: "font-bold font-dmsans",
  txtInterRegular21: "font-inter font-normal",
  txtInterSemiBold26: "font-inter font-semibold",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterExtraBold36: "font-extrabold font-inter",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtAssistantRegular14: "font-assistant font-normal",
  txtAssistantRegular14Gray90087: "font-assistant font-normal",
  txtInterBold52Black900: "font-bold font-inter",
  txtDMSansRegular18Gray600: "font-dmsans font-normal",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtDMSansBold2555: "font-bold font-dmsans",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsBold28: "font-bold font-poppins",
  txtInterBold18: "font-bold font-inter",
  txtDMSansBold181: "font-bold font-dmsans",
  txtInterBold52: "font-bold font-inter",
  txtInterExtraBold40: "font-extrabold font-inter",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtDMSansMedium18: "font-dmsans font-medium",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
