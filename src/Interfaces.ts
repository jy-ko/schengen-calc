export interface ITrip {
  country: string;
  startDate: string;
  endDate: string;
  id: string;
}


export interface ITrips {
  trips: ITrip[];
  deleteTrip(id:string): void
}

export interface FormProps {
  addTrip(trip:ITrip): void
}
