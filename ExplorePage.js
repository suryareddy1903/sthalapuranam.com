'use client'
import { getNearbyPlaces, getTransportOptions } from '@/lib/locationService'
import { useEffect, useState } from 'react'

export default function ExplorePage() {
  const [location, setLocation] = useState(null)
  const [places, setPlaces] = useState([])
  const [transports, setTransports] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const loc = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }
      setLocation(loc)
      const near = await getNearbyPlaces(loc)
      const transport = await getTransportOptions(loc)
      setPlaces(near)
      setTransports(transport)
    })
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Nearby Visitable Places</h2>
      <ul>
        {places.map((p) => (
          <li key={p.place_id}>{p.name} - {p.vicinity}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-4">Transport Options</h2>
      <ul>
        {transports.map((t, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
        ))}
      </ul>
    </div>
  )
}
