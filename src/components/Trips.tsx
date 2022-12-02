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
import { ITrip, ITrips } from "../Interfaces";
import "./Trips.css"

const Trips: React.FC<ITrips> = (props) => {
  return (
    <div>
      <ul className="trip__list">
      {props.trips.flatMap((trip, index) => (
        <>
        <li className="trip__item" key={index}>{trip.country}{trip.startDate}{trip.endDate}<DeleteIcon/></li>
        </>
      ))} 
      </ul>
    </div>
  );
};

export default Trips;
