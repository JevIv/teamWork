import React from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../n1-main/m2-bll/store";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { PATH } from "../../../../n1-main/m1-ui/routes/Pages";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export const PackName = () => {
const navigate = useNavigate();

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const handleChangePage = (event: unknown, newPage: number) => {
setPage(newPage);
};
const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };

    return (
    <>
        <IconButton color="primary" sx={{marginLeft:'450px'}} onClick={()=>{navigate(PATH.PROFILE)}} aria-label="add to shopping cart">
            <ArrowBackIcon />
        </IconButton>
        <Paper sx={{ width: '1008px', margin: '0 auto', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                            <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                {column.label}
                            </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.answer}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                            <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                            );
                            })}
                        </TableRow>
                        );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length}
                rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage} />
        </Paper>
    </>

    )
    }
    //Временно для проверки вывода даты
    const event = new Date();
    interface Column {
    id: 'question' | 'answer' | 'last_updated' | 'grade';
    label: string;
    minWidth?: number;
    align?: 'right'| 'center';
    format?: (value: number) => any;
    }

    const columns: readonly Column[] = [
    { id: 'question', label: 'Question', minWidth: 50 },
    { id: 'answer', label: 'Answer', align: 'center', minWidth: 250 },
    {
    id: 'last_updated',
    label: 'Last Updated',
    align: 'right',
    minWidth: 150,
    format: (value: number) => event.toDateString(),
    },
    {
    id: 'grade',
    label: 'Grade',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
    },
    ];

    interface Data {
    question: string;
    answer: string;
    last_updated: number;
    grade: number;
    }

    function createData(
    question: string,
    answer: string,
    last_updated: number,
    grade: number,
    ): Data {
    return { question, answer, last_updated, grade};
    }

    const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    ];