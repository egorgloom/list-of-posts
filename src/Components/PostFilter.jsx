import React from 'react'
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

export default function PostFilter({filter, setFilter}) {
    return (
        <>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sorting'
                options={[
                    { value: 'title', name: 'by name' },
                    { value: 'body', name: 'by description' }
                ]} />
        </>
    )
}
