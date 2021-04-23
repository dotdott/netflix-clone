import { useEffect, useState } from 'react'

type WindowProps = {
    width: undefined | number;
    height: undefined | number;
}

export function WindowResize() {
        const [windowSize, setWindowSize] = useState<WindowProps>({
            width: undefined,
            height: undefined,
        })
        
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }
            
            window.addEventListener('resize', handleResize);
            
            handleResize();
            
            return () => window.removeEventListener('resize', handleResize);
        }, [])

        return windowSize;
}
