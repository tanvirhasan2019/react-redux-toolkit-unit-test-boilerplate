import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
export default function Counter() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.counter)
    return (
        <div>
            <Card elevation={2} sx={{ maxWidth: 345, p: 2 }}>
                <Typography align='center' variant='h4'>
                    Redux state counter
                </Typography>
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button sx={{ m: 1, p: 1 }} onClick={() => dispatch(increment())} variant="outlined">+</Button>
                        {value?.value}
                        <Button sx={{ m: 1, p: 1 }} onClick={() => dispatch(decrement())} variant="outlined">-</Button>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
