export default function genericSearch<T>(object: T, properties: Array<keyof T>, query: string, caseSensitive: boolean): boolean {
    return properties.some(property => {
        if (query === "") {
            return true
        }
        const value = object[property]
        return typeof value === "string" || typeof value === "number" ?
            caseSensitive ? value.toString().includes(query) :
                value.toString().toLowerCase().includes(query.toLowerCase()) :
            false
    })
}