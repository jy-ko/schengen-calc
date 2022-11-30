import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const Trips = (trips:any) => {
  return (
    <div>
      <Grid item xs={12} md={6}>
        <List>
          {trips.map((trip:any) => {
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${trip}`} />
            </ListItem>;
          })}
        </List>
      </Grid>
    </div>
  );
};

export default Trips;
