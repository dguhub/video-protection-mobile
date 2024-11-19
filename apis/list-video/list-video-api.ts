/** @format */

import instance from "../instance";

export const getListVideo = async () => {
  try {
    const response = await instance.get("/videos");
    return response;
  } catch (error) {
    console.error("Error getting list video:", error);
    throw error;
  }
};

export const relativeVideo = async (id: string) => {
  try {
    const response = await instance.get(`/videos/relative/${id}`);
    return response;
  } catch (error) {
    console.error("Error getting relative video:", error);
    throw error;
  }
};
