const MapGG = ({ loc }: { loc: string }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: "8px" }}
      loading="lazy"
      allowFullScreen
      src={`https://maps.google.com/maps?q=${loc}&z=14&output=embed`}
    />
  );
};
export default MapGG;
