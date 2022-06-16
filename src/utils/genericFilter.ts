import IFilter from "../interfaces/IFilter";

export default function genericFilter<T>(object: T, filterProperties: Array<IFilter<T>>): boolean {
    return filterProperties.every(({property, isTruthySelected}) => isTruthySelected ? object[property] : !object[property])
}