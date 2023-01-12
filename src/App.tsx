import React, { useState } from "react";
import "./App.css";
import { Form}  from "./components/Form";
import Trips from "./components/Trips";
import { ITrip } from "./Interfaces";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [trips, setTrips] = useState<ITrip[] >([]);

  const addTrip = (trip: ITrip): void => {
    const newTrip = {
      id: uuidv4(),
      country: trip.country,
      startDate: trip.startDate,
      endDate: trip.endDate,
    };
    setTrips([...trips, newTrip]);
    // console.log(trips);
  };
  const deleteTrip = (selectedTrip: ITrip ) => {
    const updatedTrips = trips.filter(trip => trip.id === selectedTrip.id );  
    setTrips(updatedTrips);
    // console.log(updatedTrips);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Schengen calculator</h1>
        <Form addTrip={addTrip} />
        <p>Your trips</p>
        { trips.length >=1 && (
          <Trips trips={trips} deleteTrip={deleteTrip}/>
        )}
      </header>
    </div>
  );
}

export default App;
