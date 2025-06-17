export async function getNearbyPlaces({ lat, lng }) {
  const res = await fetch(`/api/places?lat=${lat}&lng=${lng}`)
  const data = await res.json()
  return data.results || []
}

export async function getTransportOptions({ lat, lng }) {
  const res = await fetch(`/api/transport?lat=${lat}&lng=${lng}`)
  const data = await res.json()
  return data.routes?.[0]?.legs?.[0]?.steps.map(s => s.html_instructions) || []
}
