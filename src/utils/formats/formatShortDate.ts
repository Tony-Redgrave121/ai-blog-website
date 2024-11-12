const formatShortDate = (date: string) => {
    const formantDate = new Date(date)
    return `${formantDate.toLocaleString('EN-US', { month: 'long' })} ${formantDate.getFullYear()}`
}

export default formatShortDate