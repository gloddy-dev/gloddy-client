import {
  check,
  Permission,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';

type PossiblePermission = 'camera' | 'microphone' | 'photoLibrary';

type PermissionPerOS = {
  [key in PossiblePermission]: Permission;
};

type PermissionStatus =
  | 'unavailable'
  | 'granted'
  | 'blocked'
  | 'denied'
  | 'limited';

const androidPermission: PermissionPerOS = {
  camera: PERMISSIONS.ANDROID.CAMERA,
  microphone: PERMISSIONS.ANDROID.RECORD_AUDIO,
  photoLibrary: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const iosPermission: PermissionPerOS = {
  camera: PERMISSIONS.IOS.CAMERA,
  microphone: PERMISSIONS.IOS.MICROPHONE,
  photoLibrary: PERMISSIONS.IOS.PHOTO_LIBRARY,
};

const permissionPerOS =
  Platform.OS === 'ios' ? iosPermission : androidPermission;

export const getPermission = async (
  permission: PossiblePermission,
  onSuccess: () => void,
  onFail: () => void,
  essential = false,
): Promise<boolean> => {
  const needPermission = permissionPerOS[permission];

  const handlePermissionSuccess = () => {
    if (onSuccess) onSuccess();
    return true;
  };
  const handlePermissionError = () => {
    if (onFail) onFail();
    return false;
  };

  let requested: PermissionStatus;
  const checked = await check(needPermission);
  switch (checked) {
    case RESULTS.UNAVAILABLE:
      return handlePermissionError();
    case RESULTS.GRANTED:
      return handlePermissionSuccess();
    case RESULTS.DENIED:
      requested = await request(needPermission);
      if (requested === RESULTS.GRANTED) return handlePermissionSuccess();
      return handlePermissionError();

    case RESULTS.LIMITED:
    case RESULTS.BLOCKED:
    default:
      return handlePermissionError();
  }
};
