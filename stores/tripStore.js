import { makeAutoObservable } from "mobx";
import api from "./api";
class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];
  fetchTrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  createTrip = async (trip) => {
    try {
      console.log("1", trip);
      const response = await api.post("/trips", trip);
      console.log("2");
      this.trips.push(response.data);
      console.log("3");
    } catch (e) {
      alert("cannot create new trip");
      console.log(e);
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
