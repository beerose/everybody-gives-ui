import { useState } from "react"

export interface InputWithSubmitButtonProps {
  onSubmit: (value: string) => void
}

export const InputWithSubmitButton = ({ onSubmit }: InputWithSubmitButtonProps) => {
  const [value, setValue] = useState("")

  return (
    <div className="flex space-x-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`col-span-3 block border-2 bg-background px-0 indent-6 py-4 w-full min-w-0 flex-1 rounded-md border-gray-600 focus:border-primary-500 focus:ring-primary-500`}
        placeholder="New member name..."
      />
      <button
        disabled={value === ""}
        onClick={() => {
          onSubmit(value)
          setValue("")
        }}
        className="self-end col-span-1 flex-shrink-0 rounded-md border border-transparent bg-primary-600 px-6 py-4 font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:hover:hover:bg-primary-600"
      >
        Add
      </button>
    </div>
  )
}