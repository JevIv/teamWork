import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import dayjs from 'dayjs';
import {CardPacksType} from '../../p3-dal/packsListAPI';
import {Button, ButtonGroup} from '@material-ui/core';

type TableComponentMuiType ={
    sort: (value: string)=> void
}

export const TableComponentMui = ({sort}: TableComponentMuiType) => {

    const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.cardPacks)

    const buttons = <ButtonGroup color="primary" aria-label="small outlined button group" size="small">
        <Button onClick={() => {
        }}>Delete</Button>
        <Button onClick={() => {
        }}>Edit</Button>
        <Button onClick={() => {
        }}>Learn</Button>
    </ButtonGroup>


    interface Column {
        id: 'name' | 'cardsCount' | 'updated' | 'user_name' | 'actions';
        label: string;
        minWidth?: number;
        align?: 'right' | 'center';
        format?: (value: number) => string;
        onClick: any;
    }

    const columns: readonly Column[] = [
        {id: 'name', label: 'Name', minWidth: 70, onClick: sort},
        {id: 'cardsCount', label: 'Cards', align: 'center', minWidth: 70, onClick: sort},
        {
            id: 'updated',
            label: 'Updated',
            align: 'right',
            minWidth: 100,
            format: (value: number) => dayjs(value).format('DD.MM.YYYY'),
            onClick: sort
        },
        {
            id: 'user_name',
            label: 'Created',
            minWidth: 150,
            align: 'right',
            onClick: ()=>{}
        },
        {id: 'actions', label: 'Actions', align: 'center', minWidth: 200, onClick: ()=>{}}
    ];

    interface Data {
        name: string;
        cardsCount: number;
        updated: number;
        user_name: string;
        actions?: any;
        _id: string
    }


    function createData(
        name: string,
        cardsCount: number,
        updated: number,
        user_name: string,
        actions: any,
        _id: string,
    ): Data {
        return {name, cardsCount, updated, user_name, actions, _id};
    }

    const rows = packs.map(r => createData(r.name,
        r.cardsCount,
        new Date(r.updated).getTime(),
        r.user_name, buttons, r._id))
    console.log('but',buttons)
    return (
        <>
            <Paper sx={{width: '710px', margin: '0 auto', overflow: ''}} elevation={3}>
                <TableContainer sx={{maxHeight: 540}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, i) => (
                                    <TableCell key={column.id + i}
                                               align={column.align}
                                               style={{minWidth: column.minWidth}}
                                               size={'medium'}
                                               onClick= {() => column.onClick(column.id)}>
                                        {column.label}

                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .map((row, i) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={0} key={row.name + i}>
                                            {columns.map((column, i) => {
                                                const value = row[column.id];
                                                return (
                                                    <>
                                                        <TableCell key={column.id} align={column.align}
                                                                   size={'small'}
                                                                   sx={{cursor: 'pointer'}}>

                                                            {column.format && typeof value === 'number' ? column.format(value) : value}

                                                        </TableCell>
                                                        {/*{i === 4 && <ButtonGroup color="primary" aria-label="small outlined button group" size="small">*/}
                                                        {/*    <Button onClick={() => {*/}
                                                        {/*    }}>Delete</Button>*/}
                                                        {/*    <Button onClick={() => {*/}
                                                        {/*    }}>Edit</Button>*/}
                                                        {/*    <Button onClick={() => {*/}
                                                        {/*    }}>Learn</Button>*/}
                                                        {/*</ButtonGroup>}*/}
                                                    </>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};