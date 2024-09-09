"use client"
import { cva, VariantProps } from "class-variance-authority";
import SelectComp, { SelectProps } from "react-dropdown-select";
import { IconProps, inputCVA } from "../Input";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

const selectDropdownCVA = cva([
  `rtl:[&>.react-dropdown-select-dropdown>span]:!text-right
  [&>.react-dropdown-select-dropdown>span]:!py-[2.67vw]
  tablet:[&>.react-dropdown-select-dropdown>span]:!py-[1.25vw]
  desktop:[&>.react-dropdown-select-dropdown>span]:!py-[0.52vw]
  desktop:!py-[1.4vw]
  [&>.react-dropdown-select-dropdown>span]:!px-[5.33vw]
  tablet:[&>.react-dropdown-select-dropdown>span]:!px-[2.5vw]
  desktop:[&>.react-dropdown-select-dropdown>span]:!px-[1.04vw]
  [&>.react-dropdown-select-dropdown]:!w-full [&>.react-dropdown-select-dropdown]:!z-[2] [&>.react-dropdown-select-dropdown]:!top-[100%] [&>.react-dropdown-select-dropdown]:!border',
  '[&>.react-dropdown-select-dropdown-handle>svg]:!w-[4.8vw] tablet:[&>.react-dropdown-select-dropdown-handle>svg]:!w-[2.25vw] desktop:[&>.react-dropdown-select-dropdown-handle>svg]:!w-[0.938vw] [&>.react-dropdown-select-dropdown-handle>svg]:!h-[4.8vw] tablet:[&>.react-dropdown-select-dropdown-handle>svg]:!h-[2.25vw] desktop:[&>.react-dropdown-select-dropdown-handle>svg]:!h-[0.938vw]  [&>.react-dropdown-select-dropdown]:!border-secondary-500  [&>.react-dropdown-select-dropdown]:!rounded-md [&>.react-dropdown-select-dropdown>span]:!border-none [&>.react-dropdown-select-dropdown>span:hover]:!bg-gray-450`,
]);

const selectCVA = cva([
  'rtl:!flex-row-reverse border rtl:[&>.react-dropdown-select-content>div]:!flex-row-reverse !shadow-none [&>.react-dropdown-select-content>input]:!text-[3.73vw] tablet:[&>.react-dropdown-select-content>input]:!text-[1.75vw] desktop:[&>.react-dropdown-select-content>input]:!text-[0.936vw] placeholder:text-dark/50',
  '!px-[4.27vw] tablet:!px-[2vw] desktop:!px-[0.94vw] !text-[3.73vw] tablet:!text-[1.75vw] desktop:!text-[0.936vw] [&>div>input:placeholder]:!text-dark/50  [&>div>input::placeholder]:!text-[3.73vw] tablet:[&>div>input::placeholder]:!text-[1.75vw] desktop:[&>div>input::placeholder]:!text-[0.936vw] !border !border-secondary-500 !text-dark !bg-transparent !w-full [&>svg]:!h-[4.27vw] tablet:[&>svg]:!h-[2vw] desktop:[&>svg]:!h-[0.83vw] [&>svg]:!w-[4.27vw] tablet:[&>svg]:!w-[2vw] desktop:[&>svg]:!w-[0.83vw] ![&>.react-dropdown-select-dropdown-handle>svg>path]:stroke-dark',
]);

type Props = SelectProps<any> & VariantProps<typeof selectCVA> & {
  iconProps?: IconProps;
  noContentValue?: boolean;
}

const Select = ({ iconProps, noContentValue, ...props }: Props) => {
  return props.searchable ? (
    <SelectComp
      {...props}
      color="#242527"
      dropdownHandleRenderer={({ state }) => (
        <ChevronDownIcon className={cn(selectDropdownCVA(), iconProps?.className, state.dropdown && 'rotate-180')} />
      )}
    />
  ) : (
    <SelectComp
      {...props}
      className={cn(selectCVA(), selectDropdownCVA(), props.className)}
      color="#242527"
      contentRenderer={() =>
        noContentValue ? (
          <span>{props?.values[0]}</span>
        ) : (
          <div
            className={cn(
              inputCVA(),
              `w-full justify-between !px-0 !text-[3.73vw] placeholder:text-dark/50 tablet:!text-[1.75vw] desktop:!text-[0.936vw]`
            )}
          >
            {/*@ts-ignore*/}
            {props?.value?.[0]?.label ? props?.value?.[0]?.label : props?.values?.[0] || props.placeholder}
          </div>
        )
      }
    />
  );
}


export default Select