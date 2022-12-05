export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Card = ({children}: CardProps) => (
  <div className="w-full flex items-center justify-center">
    <div className="bg-white border-2 border-black rounded-xl p-6 sm:p-10 w-full sm:w-5/6 md:w-2/3 lg:w-2/5">
      {children}
    </div>
  </div>
)