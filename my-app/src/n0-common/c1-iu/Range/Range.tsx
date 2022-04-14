import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {setMinMax} from '../../../n2-features/f2-cards/c2-packs/p2-bll/packsList-reducer';
import {useDispatch} from 'react-redux';

type RangeType = {
    min: number
    max: number
}

export const Range = ({min, max}: RangeType) => {
    const dispatch = useDispatch()

    const [value, setValue] = React.useState<number[]>([min, max]);

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleOnChangeCommitted = (event: React.SyntheticEvent | Event, value: number | Array<number>) => {
        dispatch(setMinMax(value as number[]))
        console.log(value)
    }

    return (
        <Box sx={{width: 170}}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                onChangeCommitted={handleOnChangeCommitted}
                size="small"

            />
        </Box>
    );
};
