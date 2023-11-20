import { RefObject, useEffect, useState } from "react"

const useTransitionScroll = (
    scrollWrapperRef: RefObject<HTMLDivElement>,
    animatedHeadingRef: RefObject<HTMLDivElement>
): void => {
    const [scrollY, setScrollY] = useState<number>(0);
    
    const handleScroll = () => {
        console.log("here")
        setScrollY(document.body.scrollTop)
    }

    useEffect(() => {
        console.log("using effect")
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        if (!animatedHeadingRef.current || !scrollWrapperRef.current) {
            return
        }

        const fullBackgroundHeight = viewportHeight * 3;
        const animateTextDivWidth = animatedHeadingRef.current.clientWidth;

        // transformX = startX + (endX - startX) * interpFactor
        // transformX = viewportWidth + ((-animateTextDivWidth / 2) - viewportWidth) * (scrollY / (3 * viewportHeight))
        animatedHeadingRef.current.style.transform = `translateX(${viewportWidth + ((-animateTextDivWidth / 1.5) - viewportWidth) * (scrollY / (fullBackgroundHeight))}px)`
    }, [scrollY])
}

export default useTransitionScroll