export default async function handler(req, res) {
  const { lat, lng } = req.query
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=tourist_attraction&key=${process.env.GOOGLE_MAPS_KEY}`
  )
  const data = await response.json()
  res.status(200).json(data)
}
