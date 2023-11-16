export const getTime = () => {
  const now = new Date();
  return now.toLocaleTimeString();
};

export const getCoord = (position) => {
  return { lat: position.coords.latitude, lon: position.coords.longitude };
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(getCoord(position));
      });
    } else {
      reject;
    }
  });
};
