const apiService = async (
  params,
  method = "GET",
  type = "todo",
  renameLabels = false
) => {
  // console.log(params);
  let url;
  // console.log(params);
  // console.log(JSON.stringify(params));
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    body: params ? JSON.stringify(params) : undefined,
  };
  if (type === "todo") {
    url =
      "https://react-training-ad656-default-rtdb.firebaseio.com/todos2.json";

    if (method === "PUT" || method === "DELETE") {
      url = `https://react-training-ad656-default-rtdb.firebaseio.com/todos2/${params.key}.json`;
    }

    if (renameLabels === true && method === "PUT") {
      url = `https://react-training-ad656-default-rtdb.firebaseio.com/todos2.json`;
    }
  }

  if (type === "label") {
    url =
      "https://react-training-ad656-default-rtdb.firebaseio.com/labels.json";

    if (method === "PUT" || method === "DELETE") {
      // console.log(params.key);
      url = `https://react-training-ad656-default-rtdb.firebaseio.com/labels/${params.key}.json`;
    }
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Error in apiService!", response);
    throw new Error("Error in apiService!");
  }

  // console.log(response);

  return response.json();
};

export default apiService;
