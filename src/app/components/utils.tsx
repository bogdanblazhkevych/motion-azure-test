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