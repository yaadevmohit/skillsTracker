export function AuthMobileButton({children}: {children: React.ReactNode}) {
    return(
        <button
            className="text-sm font-medium text-neutral-600 hover:text-black hover:bg-gray-100
                       px-3 py-2 rounded-xl transition-colors cursor-pointer border"
          >
            {children}
        </button>
    )
}