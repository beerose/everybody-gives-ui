import type { ComponentPropsWithoutRef, PropsWithoutRef } from "react"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  optional?: boolean
}

export const LabeledTextField = 
  ({ name, label, outerProps, labelProps, ...props }: LabeledTextFieldProps) => {
    return (
      <div
        className={`sm:grid ${label ? "sm:grid-cols-4" : ""} sm:items-start sm:gap-4`}
        {...outerProps}
      >
        {label && (
          <label
            htmlFor={name}
            className="block text-right font-medium text-gray-700 sm:mt-px sm:pt-2"
            {...labelProps}
          >
            {label}
          </label>
        )}

        <div className={`mt-1 sm:col-span-3 sm:mt-0`}>
          <div className="flex rounded-md">
            <input
              data-lpignore="true"
              type="text"
              id={name}
              className={`block border-2 bg-background px-0 indent-6 py-4 w-full min-w-0 flex-1 rounded-md border-gray-600 focus:border-primary-500 focus:ring-primary-500`}
              {...props}
            />
          </div>
        </div>
      </div>
    )
  }
