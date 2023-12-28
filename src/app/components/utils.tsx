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
    ref.current?.beginElement();
    secondRef.current?.beginElement();


    return (
        <linearGradient gradientUnits="objectBoundingBox"
            id={_id}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="300%">

            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor="white" stopOpacity="0" />

            <stop offset="10%" stopColor="#267e99" />
            <stop offset="50%" stopColor="#267e99" />

            <stop offset="50%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />

            <animate attributeName="y1" values="100%;100%;-50%;-50%;-100%;-100%;-100%" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" ref={ref}/>
            <animate attributeName="y2" values="300%;300%;300%;300%;0%;0%;0%;" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" ref={secondRef}/>
        </linearGradient>
    )
}

export const createStrokeGradient = (order: number, length: number, delay: number, delayPosition: "start" | "end", direction: "up" | "down" | "left" | "right") => {
    const totalDuration = length + delay;
    const start = delay / totalDuration;
    const gradientKeyTimes = `0;${delayPosition === "start" ? start : 0};${delayPosition === "start" ? 1 : (1 - start)};1`

    let gradientValuesY1;
    let gradientValuesY2;
    let gradientValuesX1;
    let gradientValuesX2;

    switch (direction) {
        case 'up':
            gradientValuesY1 = "100%;100%;-40%;-40%;";
            gradientValuesY2 = "140%;140%;0%;0%;";
            gradientValuesX1 = "0%;0%;0%;0%;";
            gradientValuesX2 = "0%;0%;0%;0%;";
            break;
            case 'down':
            gradientValuesY1 = "-10%;-10%;140%;140%;";
            gradientValuesY2 = "-40%;-40%;100%;100%;";
            gradientValuesX1 = "0%;0%;0%;0%;";
            gradientValuesX2 = "0%;0%;0%;0%;";
            break;
        case 'left':
            gradientValuesY1 = "0%;0%;0%;0%;";
            gradientValuesY2 = "0%;0%;0%;0%;";
            gradientValuesX1 = "100%;100%;-40%;-40%;";
            gradientValuesX2 = "140%;140%;0%;0%;";
            break;
        case 'right':
            gradientValuesY1 = "0%;0%;0%;0%;";
            gradientValuesY2 = "0%;0%;0%;0%;";
            gradientValuesX1 = "0%;0%;140%;140%;";
            gradientValuesX2 = "-40%;-40%;100%;100%;";
            break;
        default:
            gradientValuesY1 = "100%;100%;-40%;-40%;";
            gradientValuesY2 = "140%;140%;0%;0%;";
            gradientValuesX1 = "0%;0%;0%;0%;";
            gradientValuesX2 = "0%;0%;0%;0%;";
    }

    return (
        <linearGradient gradientUnits="objectBoundingBox"
            id={`new-blue-pulse-${order}`}
            x1="0%"
            y1={direction === "up" ? "100%" : "-20%"}
            x2="0%"
            y2={direction === "up" ? "140%" : "-40%"} >
            <stop stopColor="#1F7994" stopOpacity="0"></stop>
            <stop offset="0.05" stopColor="#1F7994"></stop>
            <stop offset="1" stopColor="#1F7994" stopOpacity="0"></stop>
            <animate attributeName="y1" values={gradientValuesY1} dur={`${totalDuration}s`} keyTimes={gradientKeyTimes} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="y2" values={gradientValuesY2} dur={`${totalDuration}s`} keyTimes={gradientKeyTimes} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="x1" values={gradientValuesX1} dur={`${totalDuration}s`} keyTimes={gradientKeyTimes} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="x2" values={gradientValuesX2} dur={`${totalDuration}s`} keyTimes={gradientKeyTimes} repeatCount="indefinite" calcMode="linear" />
        </linearGradient>
    )
}