import IProperty from "../interfaces/IProperty";

export default function genericSort<T>(a: T, b: T, {property, isDescending}: IProperty<T>) {
    const result = () => {
        let valA = a[property]
        let valB = b[property]
        return valA > valB ? 1 : valA < valB ? -1 : 0
    }
    return isDescending ? result() * -1 : result()
}
