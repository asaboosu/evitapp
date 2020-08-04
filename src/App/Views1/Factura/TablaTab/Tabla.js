import React from 'react';

import BTable from 'react-bootstrap/Table';


import { useTable, useSortBy, usePagination } from 'react-table';



function Tabla({ columns, data, seleccionarHandler, selectedCodigo, mostrarSelect = true }) {




    // Use the state and functions returned from useTable to build your UI

    const {
        getTableProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        seleccionarHandler,
        initialState: { pageIndex: 0 },
    },
        useSortBy,
        usePagination
    )

    // Render the UI for your table
    return (
        <div className="border border-dark rounded">
            <BTable striped bordered responsive hover size="sm" {...getTableProps()}>
                <thead className="bg-danger">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '▲'
                                                : '▼'
                                            : '❖'}
                                    </>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr className={(row.values.codigo === selectedCodigo) ? "bg-primary" : ""} onClick={() => {
                                if (seleccionarHandler !== undefined) {
                                    seleccionarHandler(row.values);

                                }
                            }}
                                {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <th {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </BTable>
            <div className="pagination bg bg-danger">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <button className="btn btn-dark m-1" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                {'<<'}
                            </button>{' '}
                            <button className="btn btn-dark m-1" onClick={() => previousPage()} disabled={!canPreviousPage}>
                                {'<'}
                            </button>{' '}
                            <button className="btn btn-dark m-1" onClick={() => nextPage()} disabled={!canNextPage}>
                                {'>'}
                            </button>{' '}
                            <button className="btn btn-dark m-1" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                                {'>>'}
                            </button>{' '}
                            <span className="text-center my-auto mx-auto">
                                Pagina{' '}
                                <strong className="text-center">
                                    {pageIndex + 1} de {pageOptions.length}
                                </strong>{' '}
                            </span>

                        </div>
                        {mostrarSelect &&
                            <div className="col-md-12 col-sm-12 text-center align-middle pt-2">
                                <select
                                    className=" input-group input-group-sm w-50 mx-auto  "
                                    value={pageSize}
                                    onChange={e => {
                                        setPageSize(Number(e.target.value))
                                    }}
                                >
                                    {[10, 20, 30, 40].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            Mostrar {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabla;
