const fetchData = async <T>(path: string): Promise<T> => {
    const response = await fetch(`http://localhost:5000/static/jsons/${path}`)
    if (!response.ok) throw new Error(response.statusText)

    return response.json()
}

export default fetchData