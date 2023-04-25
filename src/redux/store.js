import { configureStore } from "@reduxjs/toolkit";
import potenialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice";

export default configureStore({
    reducer: {
        potenialCountries: potenialCountriesReducer,
        displayedCountry: displayedCountryReducer,
    },
});