"use client";
import { CustomButtonProps } from "@/types";
import React from "react";
import Image from "next/image";
const CustomButton = ({
  textStyles,
  rightIcon,
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} fill alt="arrow" className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
