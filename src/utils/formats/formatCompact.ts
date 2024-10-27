const formatCompact = (number: number) => {
    const nf = new Intl.NumberFormat('en-US', {notation: "compact"})
    return nf.format(number)
}
export default formatCompact