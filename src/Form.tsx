import { GiftIcon } from "@heroicons/react/solid"
import type { PropsWithoutRef, ReactNode } from "react"

import { Button } from "./Button"

export interface FormProps extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  children?: ReactNode
  submitText: string
  formTitle: string
  onSubmit: () => void | Promise<void>
  submitError: JSX.Element | null
}

export function Form({
  children,
  formTitle,
  submitText,
  onSubmit,
  submitError,
  ...props
}: FormProps) {
  return (
    <form
      className="space-y-4 divide-y divide-gray-200"
      onSubmit={e => {
        e.preventDefault()
        void onSubmit()
      }}
      {...props}
      autoComplete="off"
    >
      <div className="space-y-4 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-4">
          <div className="space-y-6">
            <div className="text-center">
              <GiftIcon className="mx-auto h-10 w-10 text-gray-400" />
              <h1 className="mt-1 text-5xl font-black tracking-tight text-gray-700 text-center">
                {formTitle}
              </h1>
            </div>
            {children}
          </div>
          {submitError && (
            <div role="alert" className=" text-red-600 text-right">
              {submitError}
            </div>
          )}
          <div className="pt-5">
            <div className="flex justify-end">
              <Button type="submit" width={150}>
                {submitText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form
