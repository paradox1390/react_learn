export const cutText = (text, size) => {
  if (text.length > size) {
    const res = text.slice(0, size);
    return res + "...";
  }
  return text;
};
