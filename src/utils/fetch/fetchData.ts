const fetchData = async <T>(path: string): Promise<T> => {
    const response = await fetch(`http://192.168.178.24:5000/static/jsons/${path}`)
    if (!response.ok) throw new Error(response.statusText)

    return response.json()
}

export default fetchData