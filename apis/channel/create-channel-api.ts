/** @format */

import instance from "../instance";

interface CreateChannelData {
  name: string;
  description?: string;
  // Add other fields as required by your API
}

async function createChannel(data: CreateChannelData) {
  try {
    const response = await instance.post("/channels", data);
    return response;
  } catch (error) {
    console.error("Error creating channel:", error);
    throw error;
  }
}

export default createChannel;
