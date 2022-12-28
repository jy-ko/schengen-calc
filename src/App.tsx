import { useState } from "react";
import "./App.css";
import { Form}  from "./components/Form";
import Trips from "./components/Trips";
import { ITrip } from "./Interfaces";

function App() {
  const [trips, setTrips] = useState<ITrip[] >([]);

  const addTrip = (trip: ITrip): void => {
    const newTrip = {
      country: trip.country,
      startDate: trip.startDate,
      endDate: trip.endDate,
    };
    setTrips([...trips, newTrip]);
    console.log(trips);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Schengen calculator</h1>
        <Form addTrip={addTrip} />
        <p>Your trips</p>
        { trips.length >=1 && (
          <Trips trips={trips}/>
        )}
      </header>
    </div>
  );
}

export default App;
