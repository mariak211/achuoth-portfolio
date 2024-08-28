'use client';
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs";

const StairTransition = () => {
    const pathname = usePathname()

  return (
    <>
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-pointer-events-none">
                <Stairs/>
            </div>
        </div>
     </AnimatePresence>
    </>
  )
}

export default StairTransition