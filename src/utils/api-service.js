let url =
  "https://react-training-ad656-default-rtdb.firebaseio.com/todos2.json";

const apiService = async (params, method = "GET") => {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    body: params ? JSON.stringify(params) : undefined,
  };

  if (method === "PUT" || method === "DELETE") {
    url = `https://react-training-ad656-default-rtdb.firebaseio.com/todos2/${params.key}.json`;
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Error in apiService!", response);
    throw new Error("Error in apiService!");
  }

  console.log(response);

  return response.json();
};

export default apiService;
