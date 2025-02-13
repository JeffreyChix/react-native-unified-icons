import React from "react";
import { IconType, IconProps, IconComponents } from "./types";

export function Icon<T extends IconType>({
  select,
  className,
  ...props
}: IconProps<T>) {
  const IconComponent = IconComponents[select.from] as any;
  return <IconComponent name={select.name} className={className} {...props} />;
}
