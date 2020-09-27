import axios from "axios";

const urlBase = "http://private-8e8921-woloxfrontendinverview.apiary-mock.com";

export const postLogin = async (email, password) => {
  try {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: {
          "email": email,
          "password": password
      },
      url: `${urlBase}/login`
    };

    let response = await axios(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
