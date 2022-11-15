import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, Divider, ListItemText } from '@mui/material';

const ReqMes = ({ text, name }) => {
  return (
    <>
     <List>      
          <ListItem alignItems="flex-start">
              <ListItemAvatar>
                  <Avatar  />
              </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={text}
                />
                
            </ListItem>
            <Divider variant="inset" component="li" />
         
      
      </List>
    </>
  )
}

export default ReqMes
