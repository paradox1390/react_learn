export const auth = async () => {
  const responce = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "yraigatt3",
      password: "sRQxjPfdS",
    }),
  });
  const res = await responce.json();

  return res;
};
