'use client'

import { ThemeProvider } from 'next-themes'

const Providers = ({children}) => {
    //Solo el provider va a estar del lado del cliente, los demas componentes que no tengan use client estaran del lado del servidor
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transitions-colors duration-300 min-h-screen select-none'>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers