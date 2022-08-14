import { useTheme } from 'next-themes'

export default function DarkModeToggleButton() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <button className="inline-flex items-center 
            border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
            bg-gray-100 
            focus:outline-none 
            hover:bg-gray-50
            hover:text-orange-500
            dark:bg-slate-600
            dark:text-slate-400
            dark:hover:bg-slate-700
            dark:hover:text-yellow-300
            "
             type="button"
             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}            
            >
            {/* light mode */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" 
                viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            {/* dark mode */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-o" 
                viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            </button>
        </>
    );

}