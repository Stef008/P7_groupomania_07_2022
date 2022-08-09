const { VITE_SERVER, VITE_PORT } = import.meta.env;
const url = `http://${VITE_SERVER}:${VITE_PORT}/`;

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Accept": "application/json",
};

export { url, headers };