export const numberWithDots = (x: number | string): string => {
    if (typeof x !== 'number' || isNaN(x as number)) {
        return '00';
    }
    return (x as number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};