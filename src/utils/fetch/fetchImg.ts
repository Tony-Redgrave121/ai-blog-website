const fetchImg = async (path: string): Promise<Blob> => {
    const response = await fetch(`http://192.168.178.24:5000/static/${path}`)
    if (!response.ok) throw new Error(response.statusText)

    return response.blob()
}

export default fetchImg