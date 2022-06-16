import React, {useState} from "react";
import PropsWithChildrenFunction from "../types/PropsWithChildrenFunction";
import {Sorters} from "./Sorters";
import {Filters} from "./Filters";
import genericSearch from "../utils/genericSearch";
import genericFilter from "../utils/genericFilter";
import {SearchInput} from "./SearchInput";
import genericSort from "../utils/genericSort";
import ISorter from "../interfaces/ISorter";
import IFilter from "../interfaces/IFilter";

export interface ISearchSortAndFilterProps<T> {
    title: string
    dataSource: Array<T>
    initialSearchQuery: string
    searchProperties: Array<keyof T>
    initialSortProperty: ISorter<T>
    initialFilterProperties: Array<IFilter<T>>
}
export interface ISearchSortAndFilterState<T> {
    searchQuery: string
    sortProperty: ISorter<T>
    filterProperties: Array<IFilter<T>>
}

export function SearchSortAndFilter<T> ({dataSource, initialFilterProperties, initialSearchQuery, initialSortProperty, searchProperties, title, children}: PropsWithChildrenFunction<ISearchSortAndFilterProps<T>, T>) {
    const [searchSortAndFilterState, setSearchSortAndFilterState] = useState<ISearchSortAndFilterState<T>>({
        searchQuery: initialSearchQuery,
        sortProperty: initialSortProperty,
        filterProperties: initialFilterProperties,
    })
    const {searchQuery, sortProperty, filterProperties} = searchSortAndFilterState
    return (
        <>
            <h2>{title}</h2>
            <SearchInput searchQuery={searchQuery} setSearchQuery={(searchQuery) => setSearchSortAndFilterState({...searchSortAndFilterState, searchQuery})} />
            <Sorters dataSource={dataSource} setSortProperty={(sortProperty) => {setSearchSortAndFilterState({...searchSortAndFilterState, sortProperty})}}/>
            <Filters dataSource={dataSource} filterProperties={filterProperties} setFilterProperties={(filterProperties) => { setSearchSortAndFilterState({...searchSortAndFilterState, filterProperties})}} />
            {children && dataSource
                .filter(a => genericSearch(a, searchProperties, searchQuery, false))
                .filter(a => genericFilter(a, filterProperties))
                .sort((a, b) => genericSort(a, b, sortProperty))
                .map(a => children(a))}
        </>
    )
}
