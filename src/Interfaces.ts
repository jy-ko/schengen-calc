
export interface ITrip {
  country: string;
  startDate: string;
  endDate: string;
  // [key: string]: any;
}


export interface ITrips {
  trips: ITrip[];
}

export interface FormProps {
  addTrip(trip:ITrip): void
}
