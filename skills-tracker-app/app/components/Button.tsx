interface ButtonProps {
  href: string;
  children: React.ReactNode
}

export function Button({ href, children }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex gap-2 justify-center 
                       bg-black w-fit mx-auto 
                       text-white px-4 py-3 rounded-xl 
                       cursor-pointer
                       hover:bg-black/80 
                       text-sm
                       "
    >
      {children}
      <div className="relative h-5 w-5 text-md overflow-hidden">
        <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
          <span>&#8594;</span>
          <span>&#8594;</span>
        </div>
      </div>
    </a>
  )
}