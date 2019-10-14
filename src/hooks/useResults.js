import yelp from "../api/yelp";
import React, { useState, useEffect } from "react";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async searchText => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchText,
          location: "san jose"
        }
      });
      setResult(response.data.businesses);
      console.log(response.data.total);
    } catch (err) {
      setErrorMessage("API request Failed");
    }
  };

    useEffect(() => {
      searchAPI("pasta");
    }, []);

  return [searchAPI, result, errorMessage];
};
