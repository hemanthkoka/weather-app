type ActionsType =
  | {
      type: string;
      payload: {
        lat: number;
        lng: number;
      };
    }
  | {
      type: string;
      payload: Weather;
    }
  | {
      type: string;
      payload: Error;
    }
  | {
      type: string;
      payload?: undefined;
    };
