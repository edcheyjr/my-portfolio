'use client' // Add this if you're using the App Router

import { useEffect } from 'react'

export function EasterEgg() {
    useEffect(() => {
        easterEgg()
        // or dukaflowEasterEgg()
    }, []) // Empty dependency array = runs only once on mount

    return (
      <></>
    )
}

function easterEgg() {
    console.log(
        `%c
   ███████╗██████╗  ██████╗██╗  ██╗███████╗██╗   ██╗
   ██╔════╝██╔══██╗██╔════╝██║  ██║██╔════╝╚██╗ ██╔╝
   █████╗  ██║  ██║██║     ███████║█████╗   ╚████╔╝ 
   ██╔══╝  ██║  ██║██║     ██╔══██║██╔══╝    ╚██╔╝  
   ███████╗██████╔╝╚██████╗██║  ██║███████╗   ██║   
   ╚══════╝╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   
  
   %c%c`,
        "color: #f7abba; font: 400 1em monospace;",
        "",
        "background-color: #f7abba; color: black; font: 400 1em monospace; padding: 0.5em 0; font-weight: bold;",
        ""
    )
}