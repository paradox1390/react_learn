export const auth = async () => {
  const responce = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "nloiterton8",
      password: "HTQxxXV9Bq4",
    }),
  });
  const res = await responce.json();

  return res;
};

export const getPost = async () => {
  const responce = await fetch("https://dummyjson.com/posts");
  const res = await responce.json();
  return res;
};
