// EXTERNAL DEPENDENCIES 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

//  JS FILES 
import { handleFetchCoinData } from './handleFetchCoinData';

//  CSS FILES 
import './coins-table.css';


//columns in the table
const columns = [
    { id: 'name', label: 'Coin', minWidth: 170, },
    { id: 'galaxy_score', label: 'Galaxy Score', minWidth: 100, display: 'hidden' },
    { id: 'alt_rank', label: 'Alt Rank', minWidth: 100 },
    { id: 'price', label: 'PRICE (USD)', minWidth: 100 },
    {
        id: 'percent_change_24h', label: '24H % Change (USD)',
        minWidth: 100, format: (value) => value.toFixed(2),
        changeColor: (value) => value > 0 ? '#14ef14' : 'red'
    },
    {
        id: 'percent_change_7d', label: '7d % Change (USD)',
        minWidth: 100, format: (value) => value.toFixed(2),
        changeColor: (value) => value > 0 ? '#14ef14' : 'red'
    },
    {
        id: 'percent_change_30d', label: '30d % Change (USD)',
        minWidth: 100, format: (value) => value.toFixed(2),
        changeColor: (value) => value > 0 ? '#14ef14' : 'red'
    },
    { id: 'market_cap', label: 'Market Cap (USD)', minWidth: 100 },
    { id: 'volume_24h', label: 'Market Value (USD)', minWidth: 100 },
    {
        id: 'market_dominance', label: 'Market Dominance (%)',
        minWidth: 100, format: (value) => value.toFixed(2),
        changeColor: (value) => value > 0 ? '#14ef14' : 'red'
    },
    { id: 'volatility', label: 'Volatility', minWidth: 100, format: (value) => value.toFixed(4) },
    { id: 'social_volume', label: 'Social Volume', minWidth: 100 },//not sure if correct data from api is picked
    { id: 'social_score_calc_24h_previous', label: 'Social Engagement', minWidth: 100 },//not sure if correct data from api is picked
    { id: 'social_contributors', label: 'Social Contributors', minWidth: 100 },//not sure if correct data from api is picked
    {
        id: 'social_dominance', label: 'Social Dominance (%)',
        minWidth: 100, format: (value) => value.toFixed(4),
        changeColor: (value) => value >= 0 ? '#14ef14' : 'red'
    }
];


const useStyles = makeStyles({
    root: {
        width: '100%',
        color: 'white'
    },
    checkboxmenu: {
        color: 'white',
        width: 'max-content'
    },
    container: {
        maxHeight: 800,
    },
});


const CoinsTable = () => {
    const classes = useStyles();

    const [metricsCount, setMetricCount] = useState(14);
    const [showColumn, setShowColumn] = useState(Array(15).fill(true));
    const handleMetricsCheckboxChange = (e) => {
        e.preventDefault();
        console.log(e);
        let mutatedShowColumn = [...showColumn];
        mutatedShowColumn[e.target.name] = !mutatedShowColumn[e.target.name];
        if (mutatedShowColumn[e.target.name]) {
            setMetricCount(metricsCount => metricsCount + 1);
        } else {
            setMetricCount(metricsCount => metricsCount - 1);
        }
        setShowColumn(mutatedShowColumn);
    }

    const [showCheckBoxMenu, setShowCheckBoxMenu] = useState(false);
    const handleShowCheckBoxMenuToggle = (e) => {
        e.preventDefault();
        setShowCheckBoxMenu(showCheckBoxMenu => !showCheckBoxMenu);
    }



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);

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
        handleFetchCoinData(page, rowsPerPage)
            .then(res => setRows(res))
    }, [page, rowsPerPage])
    //api calling above



    return (
        <div className='coins-table-wrapper'>
            <section style={{ backgroundColor: '', color: 'white', height: '40px' }}>
                <center>COINS</center>
                <div style={{ float: 'right', backgroundColor: 'rgb(17,18,28)', color: 'white' }}>
                    <Button variant="contained" color="primary" onClick={handleShowCheckBoxMenuToggle}>
                        {metricsCount} of 14 Metrics
                    </Button>
                </div>
            </section>
            <div style={{ float: 'right' }}>
                <Paper className={`${classes.checkboxmenu} metrics-check-box-menu`}  >
                    {showCheckBoxMenu && <div >
                        <FormGroup col style={{
                            backgroundColor: 'rgb(34 35 49)',
                            color: 'white',
                            padding: '5px'
                        }}>
                            {columns.map((col, idx) => {
                                if (idx === 0) return;
                                return (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={showColumn[idx]}
                                                onClick={handleMetricsCheckboxChange}
                                                name={idx}
                                                color="secondary"
                                            />
                                        }
                                        label={col.label}
                                    />
                                )
                            })}
                        </FormGroup>

                    </div>}
                </Paper>
            </div>
            <Paper className={`${classes.root}`} >

                <TableContainer className={`${classes.container}`}>
                    <Table stickyHeader aria-label="sticky table" className="coins-table-bg">
                        <TableHead >
                            <TableRow>
                                {columns.map((column, idx) => (
                                    showColumn[idx] && <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth,
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
                                                showColumn[idx] && <TableCell key={column.id} align={column.align}
                                                    style={{ backgroundColor: 'rgb(17,18,28)', color: column.changeColor ? column.changeColor(value) : 'white' }}
                                                    className={idx === 0 ? "coin-table-sticky-col" : ""}
                                                >
                                                    {idx === 0 && <Link to={`/coin/${row['symbol']}`}> {value} </Link>}
                                                    {column.format && typeof value === 'number' ? column.format(value) : idx ? value : ''}
                                                    {idx === 0 && <Link to={`/coin/${row['symbol']}`}><img
                                                        src={`https://dkhpfm5hits1w.cloudfront.net/${value.split(' ')[0].toLowerCase()}.png`}
                                                        className="cryptocurrency-logo"
                                                        atl=""
                                                    /></Link>}
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
                    rowsPerPageOptions={[20, 30, 50]}
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