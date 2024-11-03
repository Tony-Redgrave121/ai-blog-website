const formatDate = (date: string) => {
    const formantDate = new Date(date)
    return `${formantDate.toLocaleString('EN-US', { month: 'long' })} ${formantDate.getDate()}, ${formantDate.getFullYear()}`
}

export default formatDate