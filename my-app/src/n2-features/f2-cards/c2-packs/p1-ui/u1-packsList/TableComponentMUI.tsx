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
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../../../../n1-main/m1-ui/routes/Pages';
import {UserType} from '../../../../../API/ProfileAPI/profileAPI';

type ButtonsType = {
    packId: string
    deleteHandler: (packId: string)=> void
    disable: boolean
}


const Buttons = ({packId, deleteHandler, disable}: ButtonsType) => {

    return (
        <ButtonGroup color="primary" aria-label="small outlined button group" size="small">
            <Button disabled={disable} onClick={() => {
                deleteHandler(packId)
            }}>Delete</Button>
            <Button disabled={disable}  onClick={() => {
            }}>Edit</Button>
            <Button onClick={() => {
            }}>Learn</Button>
        </ButtonGroup>
    )
}

type TableComponentMuiType = {
    sort: (value: string) => void
    deleteHandler: (packId: string)=> void
    profileId: string
}

export const TableComponentMui = ({sort, deleteHandler, profileId}: TableComponentMuiType) => {
    const navigate = useNavigate();

    const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.cardPacks)


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
            onClick: () => {
            }
        },
        {
            id: 'actions', label: 'Actions', align: 'center', minWidth: 200, onClick: () => {
            }
        }
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

    const rows = packs.map(r => {

        const isDisabled = r.user_id !== profileId

        return createData(
            r.name,
            r.cardsCount,
            new Date(r.updated).getTime(),
            r.user_name,
            <Buttons
                deleteHandler={()=>{deleteHandler(r._id)}}
                disable={isDisabled}
                packId={r._id}
            />
            , r._id)
    }
    )

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
                                               onClick={() => column.onClick(column.id)}>
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

                                                    <TableCell key={column.id} align={column.align}
                                                               size={'small'}
                                                               sx={{cursor: 'pointer'}}
                                                               onClick={() => {
                                                                   column.id !== 'actions' && navigate(PATH.PACK_NAME)
                                                               }
                                                               }>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>)
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

{/*{i === 4 && <ButtonGroup color="primary" aria-label="small outlined button group" size="small">*/
}
{/*    <Button onClick={() => {*/
}
{/*    }}>Delete</Button>*/
}
{/*    <Button onClick={() => {*/
}
{/*    }}>Edit</Button>*/
}
{/*    <Button onClick={() => {*/
}
{/*    }}>Learn</Button>*/
}
{/*</ButtonGroup>}*/
}