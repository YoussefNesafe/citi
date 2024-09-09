"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"
import SVGIcon from "@/app/hocs/SVGIcon"
import Phone from "../icons/Phone"
import Mail from "../icons/Mail"
import Label from "../Span/Label"

type RadioGroupProps = {
  value: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName


type Props = { icon: string; label: string } & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  Props
>(({ className, icon, label, ...props }, ref) => {
  const RADIO_GROUP_ICONS_MAP = {
    'phone': <Phone />,
    'mail': <Mail />
  }
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        " flex border border-gray-450 disabled:cursor-not-allowed disabled:opacity-50  rounded-full aria-checked:border-primary-900 group w-full aria-checked:bg-linear-primary",
        className
      )}
      {...props}
    >
      <div className="w-full flex items-center gap-[1.398vw] tablet:gap-[0.75vw] desktop:gap-[0.52vw] py-[1.398vw] px-[3.728vw] tablet:py-[0.75vw] tablet:px-[2vw] desktop:py-[0.416vw] desktop:px-[0.832vw]">
        <div className="w-[3.728vw] h-[3.728vw] tablet:w-[2vw] tablet:h-[2vw] desktop:w-[1.04vw] desktop:h-[1.04vw] [&>svg>path]:fill-gray-450  group-aria-checked:[&>svg>path]:fill-primary-900">{RADIO_GROUP_ICONS_MAP[icon as keyof typeof RADIO_GROUP_ICONS_MAP]}
        </div>
        <div className="text-gray-450 group-aria-checked:text-primary-900 font-medium text-[2.796vw] tablet:text-[1.5vw] desktop:text-[0.832vw]" >{label}</div>
      </div>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
