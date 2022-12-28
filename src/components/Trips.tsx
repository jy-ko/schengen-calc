import DeleteIcon from "@mui/icons-material/Delete";
import { ITrips } from "../Interfaces";
import "./Trips.css"
import dayjs from "dayjs";

const Trips: React.FC<ITrips> = (props) => {
  return (
    <div>
      <ul className="trip__list">
        {props.trips.flatMap((trip, index) => (
          <li className="trip__item" key={index}>
            {trip.country}
            <p>Start: {dayjs(trip.startDate).format('DD/MM/YYYY')}</p>
            <p>End: {dayjs(trip.endDate).format('DD/MM/YYYY')} </p>
          <DeleteIcon />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trips;
