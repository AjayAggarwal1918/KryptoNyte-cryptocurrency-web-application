// EXTERNAL DEPENDENCIES 
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

//  JS FILES 
import { handleFetchCoinData } from './handleFetchCoinData'; 

//  CSS FILES 
import './coins-table.css'; 


//columns in the table
const columns = [
    { id: 'name', label: 'Coin', minWidth: 170 },
    { id: 'galaxy_score', label: 'Galaxy Score', minWidth: 100 },
    { id: 'alt_rank', label: 'Alt Rank', minWidth: 100 },
    { id: 'price', label: 'PRICE (USD)', minWidth: 100 },
    { id: 'percent_change_24h', label: '24H % Change (USD)', minWidth: 100 },
    { id: 'percent_change_7d', label: '24H % Change (USD)', minWidth: 100 },
    { id: 'percent_change_30d', label: '24H % Change (USD)', minWidth: 100 },
    { id: 'market_cap', label: 'Market Cap (USD)', minWidth: 100 },
    { id: 'volume_24h', label: 'Market Value (USD)', minWidth: 100 },
    { id: 'market_dominance', label: 'Market Dominance (%)', minWidth: 100 },
    { id: 'volatility', label: 'Volatility', minWidth: 100 },
    { id: 'social_volume', label: 'Social Volume', minWidth: 100 },//not sure if correct data from api is picked
    { id: 'social_score_calc_24h', label: 'Social Engagement', minWidth: 100 },//not sure if correct data from api is picked
    { id: 'social_contributors', label: 'Social Contributors', minWidth: 100 },//not sure if correct data from api is picked
    { id: 'social_dominance', label: 'Social Dominance (%)', minWidth: 100 }
];


const useStyles = makeStyles({
    root: {
        width: '100%',
        color: 'white'
    },
    container: {
        maxHeight: 500,
    },
});


const CoinsTable=()=>{
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    //state to store data about coins from api
    const [rows, setRows] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    //api calling below
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await handleFetchCoinData(page, rowsPerPage);
            return response;
            // ...
        }
        fetchData()
            .then(res => setRows(res))
    }, [page, rowsPerPage])
    //api calling above



    return (
        <div className='coins-table-wrapper'>
            <section style={{ backgroundColor: '', color: 'white', height: '40px' }}>
                <center>COINS</center>
            </section>
            <Paper className={`${classes.root}`} >
                <TableContainer className={`${classes.container}`}>
                    <Table stickyHeader aria-label="sticky table" className="coins-table-bg">
                        <TableHead >
                            <TableRow>
                                {columns.map((column, idx) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth,
                                            backgroundColor: 'rgb(17,18,28)', 
                                            color: 'white' 
                                        }}
                                        className={idx === 0 ? "coin-table-sticky-header" : ""}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rows.map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column, idx) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}
                                                    style={{ backgroundColor: 'rgb(17,18,28)', color: 'white' }}
                                                    className={idx === 0 ? "coin-table-sticky-col" : ""}
                                                >
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    style={{ backgroundColor: 'rgb(17,18,28)', color: 'white' }}
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    // count={rows.length}
                    count={76}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}


export default CoinsTable; 