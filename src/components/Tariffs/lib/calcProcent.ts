export function calcProcent(price: number, fullPrice: number) {
    if (!price || !fullPrice) {
        return;
    }

    return (price / fullPrice) * 100;
}
