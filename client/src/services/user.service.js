import axios from "axios";

class UserService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/user",
      withCredentials: true,
    });
  }

  newReservation = (restaurantId, data) =>
    this.app.post(`/${restaurantId}`, data);
}

export default UserService;
