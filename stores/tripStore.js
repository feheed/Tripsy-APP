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
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchShops();
export default tripStore;
