import * as React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../shared/store/actions";

declare global {
  interface Window {
    initMap: Function;
  }
}

export interface MapProps {}

export const Map: React.FC<MapProps> = () => {
  const dispatch = useDispatch();

  const mapReady = React.useCallback(() => dispatch(actions.mapReadyAction()), [
    dispatch,
  ]);

  const getWeather = React.useCallback(
    (lat: number, lng: number) => dispatch(actions.weatherGetAction(lat, lng)),
    [dispatch]
  );

  const mapRef = React.useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const onLoaded = () => {
        const map = new google.maps.Map(node, {
          center: { lat: 17.385, lng: 78.4867 }, // default is Hyderabad station!!
          zoom: 8,
          mapTypeControl: false,
          disableDoubleClickZoom: false,
          fullscreenControl: false,
          keyboardShortcuts: false,
          streetViewControl: false,
          scaleControl: false,
          rotateControl: false,
          panControl: false,
        });
        map.addListener("click", (e) => {
          getWeather(e.latLng.lat(), e.latLng.lng());
        });
        mapReady();
      };
      // remove this key when you run it on your localhost.
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5o5wtvz2sf_ckQm9rciFuJxc4pp2Sx-o&callback=initMap";
      script.async = true;
      document.body.appendChild(script);
      window.initMap = onLoaded;
    }
  }, []);
  return <div id="map" ref={mapRef} />;
};
