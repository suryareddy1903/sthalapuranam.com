export default async function handler(req, res) {
  const { lat, lng } = req.query
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${lat},${lng}&destination=nearest+bus+station&mode=transit&key=${process.env.GOOGLE_MAPS_KEY}`
  )
  const data = await response.json()
  res.status(200).json(data)
}
