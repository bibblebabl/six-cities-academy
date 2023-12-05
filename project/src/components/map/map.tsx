import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import { City, Offer } from '../../types';

type MapProps = {
  city: City;
  placeLocationId: number | null;
  offers: Offer[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, offers, placeLocationId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        const icon =
          offer.id === placeLocationId ? currentCustomIcon : defaultCustomIcon;

        marker.setIcon(icon).addTo(map);
      });

      if (placeLocationId) {
        const selectedOffer = offers.find(
          (offer) => offer.id === placeLocationId
        );
        if (selectedOffer) {
          map.flyTo(
            [selectedOffer.location.latitude, selectedOffer.location.longitude],
            city.location.zoom,
            {
              duration: 1,
            }
          );
        }
      }
    }
  }, [map, offers, placeLocationId]);

  return (
    <div
      style={{ height: '100%', maxWidth: '1144px', margin: '0 auto' }}
      ref={mapRef}
    />
  );
}

export default Map;
