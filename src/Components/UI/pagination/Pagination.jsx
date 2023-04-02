import React from 'react'

import { usePagination } from './../../../hooks/usePagination';
import PageButton from './../button/PageButton';


export default function Pagination({totalPages, page, changePage}) {
    let pagesArray = usePagination(totalPages);
  return (
    <div className='pagesBlock'>
    {pagesArray.map(p => 
      <PageButton
      key={p}
      onClick={()=> changePage(p)}
      className ={page === p ? 'pageBtn pageBtnCurrent' : 'pageBtn'}
      >
        {p}</PageButton>)}
    </div>
  )
}
