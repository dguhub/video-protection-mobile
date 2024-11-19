/** @format */

import instance from "../instance";

export const getVideoDetail = async (id: string) => {
  try {
    const response = await instance.get(`/videos/detail/${id}`);
    return response;
  } catch (error) {
    console.error("Error getting list video:", error);
    throw error;
  }
};
