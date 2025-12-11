// import apiRequest from "./apiRequest";

// export const singlePageLoader = async ({ request, params }) => {
//   const res = await apiRequest("/posts/" + params.id);
//   return res.data;
// };

// export const listPageLoader = async ({ request }) => {
//   const query = request.url.split("?")[1];
//   const postResponse = await apiRequest("/posts?" + query); // Directly await the promise
//   return { postResponse }; // Return the resolved data
// };

// export const profilePageLoader = async () => {
//   const postResponse = await apiRequest("/users/profilePosts"); // Directly await the promise
//   const chatResponse = await apiRequest("/chats"); // Await the chat request as well
//   return { postResponse, chatResponse }; // Return resolved data
// };


import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  try {
    const res = await apiRequest.get(`/posts/${params.id}`);
    return res.data;
  } catch (err) {
    throw new Response("Failed to load post", { status: err?.response?.status || 500 });
  }
};

export const listPageLoader = async ({ request }) => {
  try {
    const query = request.url.split("?")[1] || "";
    const postResponse = await apiRequest.get(`/posts?${query}`);
    return { postResponse };
  } catch (err) {
    throw new Response("Failed to load list", { status: err?.response?.status || 500 });
  }
};

export const profilePageLoader = async () => {
  try {
    const postResponse = await apiRequest.get("/users/profilePosts");
    const chatResponse = await apiRequest.get("/chats");

    return { postResponse, chatResponse };
  } catch (err) {
    // If token missing → redirect to login
    if (err?.response?.status === 401) {
      throw new Response("Unauthorized", { status: 401 });
    }

    throw new Response("Failed to load profile", { status: err?.response?.status || 500 });
  }
};
