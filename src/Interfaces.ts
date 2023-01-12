export interface ITrip {
  country: string;
  startDate: string;
  endDate: string;
  id: string;
}


export interface ITrips {
  trips: ITrip[];
  deleteTrip(trip:ITrip): void
}

export interface FormProps {
  addTrip(trip:ITrip): void
}
