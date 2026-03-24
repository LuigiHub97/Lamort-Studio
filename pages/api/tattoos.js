export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      image_url: "gttps://via.placeholder.com/150",
      description: "Tattoo teste",
    },
  ]);
}
