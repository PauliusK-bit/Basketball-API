import axios from "axios";

export const fetchAllCountries = async () => {
  try {
    const { data } = await axios("http://localhost:3000/countries");
    return data;
  } catch {
    console.log(Error);

    throw new Error("Something went wrong");
  }
};
