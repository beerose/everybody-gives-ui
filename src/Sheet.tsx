export interface SheetProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Sheet = ({children, ...rest}: SheetProps) => (
  <div className="w-full flex items-center justify-center" {...rest}>
    <div className="bg-white border-2 border-black rounded-xl p-6 sm:p-10 w-full sm:w-5/6 md:w-2/3 lg:w-1/2">
      {children}
    </div>
  </div>
)