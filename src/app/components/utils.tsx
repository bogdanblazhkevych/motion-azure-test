export default function getValueFromScrollPositon(startHeight: number, endHeight: number, currentHeight: number, startValue: number, endValue: number) {
    if (currentHeight < startHeight) {
        return startValue
    }

    if (currentHeight > endHeight) {
        return endValue
    }

    const ratio = (endValue - startValue) / (endHeight - startHeight);

    const currentValue = startValue - (startHeight - currentHeight) * ratio;

    return currentValue
}
export function getValueFromScrollPositonDecreasing(startHeight: number, endHeight: number, currentHeight: number, startValue: number, endValue: number) {
    if (currentHeight > startHeight) {
        return startValue
    }

    if (currentHeight < endHeight) {
        return endValue
    }

    const ratio = (endValue - startValue) / (endHeight - startHeight);

    const currentValue = startValue - (startHeight - currentHeight) * ratio;

    return currentValue
}

export async function delay(duration: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}


export function getAnimateStroke(ref:React.RefObject<SVGAnimateElement>, order: number, offset: number, start: number, strokein: number, strokeout: number, end: number) {
    //strokein should be before gradient fillin
    //strokeout should at gradien pause
    const _start = order * 0.25;
    const _strokein = _start + strokein;
    const _strokeout = _strokein + strokeout + strokein + 0.033;
    const _end = _start + 0.25 - 0.0165
    // console.log("animation is in")
    ref.current?.beginElement()
    // console.log(ref.current)

    return (
        <animate attributeName="stroke-dashoffset"
            type="scale"
            values={`${offset};${offset};${0};${0};${offset};${offset}`}
            dur="20s"
            keyTimes={`0;${_start};${_strokein};${_strokeout};${_end};1`}
            repeatCount="indefinite"
            // begin="indefinite"
            // fill="freeze"
            ref={ref}>
        </animate>
    )
}


export function getAnimateTransform(ref:React.RefObject<SVGAnimateTransformElement>, order: number, start: number, scalein: number, scaleout: number, end: number) {
    //scalein parameter should be getLinearGradient's fill + fillout value 
    const _start = order * 0.25;
    const _scalein = _start + scalein;
    const _scaleout = _scalein + scaleout;
    const _end = _start + 0.25
    ref.current?.beginElement()
    return (
        <animateTransform attributeName="transform"
            type="scale"
            values="1;1;1.1;1;1;1"
            dur="20s"
            keyTimes={`0;${_start};${_scalein};${_scaleout};${_end};1`}
            repeatCount="indefinite"
            ref={ref}>
        </animateTransform>
    )
}


export function getLinearGradient(ref:React.RefObject<SVGAnimateElement>, secondRef:React.RefObject<SVGAnimateElement>, order: number, start: number, fill: number, fillout: number, pause: number, end?: number) {
    const _id = `draw-in-${order}`;
    const _start = order * 0.25;
    const _fill = _start + fill;
    const _fillout = _fill + fillout;
    const _pause = _fillout + pause;
    const _end = _start + 0.25
    console.log("HERE GRADIENTR ", ref.current)
    ref.current?.beginElement();
    secondRef.current?.beginElement();


    return (
        <linearGradient gradientUnits="objectBoundingBox"
            id={_id}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="300%">

            <stop offset="0%" stop-color="white" stop-opacity="0" />
            <stop offset="10%" stop-color="white" stop-opacity="0" />

            <stop offset="10%" stop-color="#267e99" />
            <stop offset="50%" stop-color="#267e99" />

            <stop offset="50%" stop-color="white" stop-opacity="0" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />

            <animate attributeName="y1" values="100%;100%;-50%;-50%;-100%;-100%;-100%" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" ref={ref}/>
            <animate attributeName="y2" values="300%;300%;300%;300%;0%;0%;0%;" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" ref={secondRef}/>
        </linearGradient>
    )
}