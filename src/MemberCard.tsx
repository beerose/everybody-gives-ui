import { XIcon } from "@heroicons/react/outline"

export interface MemberCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string
  onDelete?: () => void,
  href?: string,
}

export const MemberCard = ({ title, onDelete, id, href, className = "" }: MemberCardProps) => {
  const content = (
    <div
      className={
        "col-span-1 flex flex-col rounded-lg text-center shadow border-2 border-black " + className || ""
      }
      id={id}
    >
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="m-2 self-end text-gray-400 hover:text-gray-700 inline-flex items-center rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <XIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
      <div className="flex flex-1 flex-col p-4 break-words">
        <h3 className="font-medium text-gray-700">{title}</h3>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href}>{content}</a>
    )
  }

  return content
}
