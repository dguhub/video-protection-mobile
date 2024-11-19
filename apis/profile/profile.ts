/** @format */

import instance from "../instance";

export const getProfile = async () => {
  try {
    const response = await instance.get("/profile");
    return response;
  } catch (error) {
    console.error("Error getting list video:", error);
    throw error;
  }
};
