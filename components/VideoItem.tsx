/** @format */

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { router } from "expo-router";

interface VideoItemProps {
  thumbnail: string;
  duration: string;
  avatar: string;
  title: string;
  metadata: string;
  styleBody?: ViewStyle;
  isOnlyVideo?: boolean;
}

const VideoItem = ({
  thumbnail,
  duration,
  avatar,
  title,
  metadata,
  styleBody,
  isOnlyVideo,
}: VideoItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/video");
      }}>
      <View style={styles.videoContainer}>
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
          <Text style={styles.duration}>{duration}</Text>
        </View>

        {!isOnlyVideo && (
          <View style={[styles.videoDetails, styleBody]}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.metadata}>{metadata}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: "column",
    marginBottom: 5,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  duration: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "#fff",
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 50,
    borderRadius: 5,
    overflow: "hidden",
    textAlign: "center",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginRight: 10,
  },
  videoDetails: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  metadata: {
    color: "#666",
  },
});

export default VideoItem;
