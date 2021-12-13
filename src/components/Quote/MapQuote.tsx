import React, { useCallback, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../app/store";
import { IGetDeclarationResponse } from "../../api/micargo-api";

interface IMAP {
  map: google.maps.Map;
  maps: any;
}

const MapQuote: React.FC = () => {
  const [MAP, setMAP] = useState<IMAP>({} as IMAP);
  const declarationData = useSelector<AppStateType, IGetDeclarationResponse | undefined>(
    (state) => state.quote.declarationData
  );

  const renderWay = useCallback(() => {
    const { map, maps } = MAP;
    if (typeof maps.DirectionsRenderer === "function") {
      const directionsRenderer: google.maps.DirectionsRenderer = new maps.DirectionsRenderer();
      const directionsService: google.maps.DirectionsService = new maps.DirectionsService();

      directionsService
        .route({
          origin: declarationData?.origin as string,
          destination: declarationData?.destination as string,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((res) => {
          directionsRenderer.setDirections(res);
        })
        .catch((err) => alert(err));
      directionsRenderer.setOptions({
        markerOptions: {
          clickable: false,
        },
      });
      directionsRenderer.setMap(map);
    }
  }, [MAP, declarationData?.destination, declarationData?.origin]);

  useEffect(() => {
    if (declarationData?.destination && declarationData?.origin && MAP?.map && MAP?.maps)
      renderWay();
    // eslint-disable-next-line
  }, [declarationData, MAP?.map, MAP?.maps]);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: String(process.env.REACT_APP_API_KEY_GOOGLE_MAPS) }}
      defaultCenter={{
        lat: 39.73915,
        lng: -104.9847,
      }}
      defaultZoom={4}
      options={{
        zoomControl: false,
        fullscreenControl: false,
        keyboardShortcuts: false,
        clickableIcons: false,
        scrollwheel: false,
      }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={setMAP}
    />
  );
};

export default MapQuote;
