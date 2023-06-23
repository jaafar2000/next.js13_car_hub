import { MouseEventHandler ,SetStateAction, Dispatch} from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface CustomFilterProps {
  title: string;
  filter: string | number;
  setFilter:(filter: string  ) => void;
  options: OptionsProps[];
}
export interface OptionsProps {
  title: string;
  value: string;
}
export interface searchManufacturerProps {
  manufacturer?: string;
  setManufacturer?: (manufacturer: string) => void;
  selected?: string;
  setSelected?: (selected : string) => void
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}



export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  limit?:number ;
  setLimit: (limit : number)=>void;
}
