import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xO1Ncljd3jt0lt4ytPYRx9IduCpXHlZA1dN9ywA0hYlDNj_mW43YqQkrbacs8CZ8cR0NPR868f0oHXQjNF3LJIUNldoHzVjZIw3jCKzwMaS_1IzqQcvvLc0cwKycXXYx"
  }
});