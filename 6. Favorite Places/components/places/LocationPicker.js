import { StyleSheet, View } from "react-native";
import { OutlineButton } from "../../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";

function LocationPicker() {
  const [locationPermissioninfo, requestPermission] = useCameraPermissions;
  async function verifyPermissions() {
    if (locationPermissioninfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission(); //func by useCameraPermissions
      return permissionResponse.granted;
    }
    if (locationPermissioninfo.status === PermissionStatus.DENIED) {
      Alert.alert("Permission not provided, grant.");
      return false;
    }
    return true; //if permission already granted
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
  }

  function pickOnMapHandler() { 
    return;
  }

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
