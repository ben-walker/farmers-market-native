import {
  getCurrentPositionAsync,
  LocationObject,
  LocationPermissionResponse,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";

type ReturnUseLocation = {
  position?: LocationObject;
  permissions?: LocationPermissionResponse;
};

export const useLocation = (): ReturnUseLocation => {
  const [position, setPosition] = useState<LocationObject>();
  const [permissions, setPermissions] = useState<LocationPermissionResponse>();

  useEffect(() => {
    const getLocationState = async () => {
      const foregroundPermissions = await requestForegroundPermissionsAsync();
      setPermissions(foregroundPermissions);
      if (!foregroundPermissions.granted) {
        return;
      }

      const currentPosition = await getCurrentPositionAsync();
      setPosition(currentPosition);
    };

    void getLocationState();
  }, []);

  return { position, permissions };
};
