import axios from 'axios'

class AdminService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/admin',
      withCredentials: true
    })
  }

  getPendingRestaurants = () => this.app.get("/pendingRestaurants")
  getOneRestaurant = (id) => this.app.get(`/${id}`)
  createRestaurant = (restaurantData) => this.app.post("/newRestaurant", restaurantData)
  updateOneRestaurant = () => this.app.get ("/pendingRestaurants")
}

export default AdminService