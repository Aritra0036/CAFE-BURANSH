import React from "react";

const Button = ({
  buttonName,
  className,
  targetUrl,
}: {
  buttonName: string;
  targetUrl?: string;
  className?: string;
}) => {
  const userButton =(
    <div className="bg-[#bd1d76]  w-50 rounded-md overflow-hidden">
    <a 
      href={targetUrl} 
      className={`
        flex flex-col items-center justify-center 
        font-semibold md:font-bold text-[10px] md:text-[16px] p-[9px] md:p-[10px] no-underline
        w-full h-full
        ${className}
      `}
    >
      {buttonName}
    </a>
  </div>
    );

  return userButton;
};
export default Button;
