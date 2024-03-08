const toSvgPath = (array) => {
  if (array?.length < 2) return "M 0 0 Z";
  return (
    array
      .map((point, i) => {
        return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ") + " Z"
  );
};

export { toSvgPath };