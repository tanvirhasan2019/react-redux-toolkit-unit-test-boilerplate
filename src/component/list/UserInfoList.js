import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { avatarUrl } from "../../constants"
export default function UserInfoList({ name, phone, username, email, address }) {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={avatarUrl} alt="user" />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={username} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LocalPostOfficeIcon fontSize='sm' />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ContactPhoneIcon fontSize='sm' />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={phone} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <EditLocationAltIcon fontSize='sm' />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Street : ${address?.street}, City : ${address?.city}, ${address?.suit}`} />
            </ListItem>
        </List>
    );
}
