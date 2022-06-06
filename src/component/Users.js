import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/user/userSlice'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import UserDetails from "./drawer/UserDetails"
import {avatarUrl} from "../constants"
export default function Users() {
    const [showDetails, setShowDetails] = useState('')
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            {error && <p>something went wrong</p>}
            {loading && <p>loading</p>}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {!loading && !error && users?.map((item, index) =>
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            {showDetails === item.id && <UserDetails data={item} open={showDetails === item.id ? true : false} handleShowDetails={(state) => setShowDetails('')} />}
                            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe">
                                            {item.username[0]}
                                        </Avatar>
                                    }
                                    title={`User Name : ${item.username}`}
                                />
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar sx={{ width: '100px', height: '100px' }}
                                        alt="user" src={avatarUrl} />
                                </Box>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item?.address?.city}, {item?.address?.street}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Button onClick={() => setShowDetails(item.id)} sx={{ width: '100px', height: '30px', m: 1, fontSize: '10px' }} variant="contained">Contact</Button>
                                    <Button onClick={() => setShowDetails(item.id)} sx={{ width: '100px', height: '30px', m: 1, fontSize: '10px' }} variant="outlined">Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
}
