/** @format */

import { useLocalSearchParams, useNavigation } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

import COMMENTS from "@/assets/comments-detail.json";
import { faker } from "@faker-js/faker/.";

export default function DetailsScreen() {
  const { comment } = useLocalSearchParams();
  const [commentData, setCommentData] = useState(COMMENTS);
  const navigation = useNavigation();
  const [likedComments, setLikedComments] = useState<string[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Comment detail",
    });
  }, [navigation]);

  const handleLike = (id: string) => {
    if (likedComments.includes(id)) {
      setLikedComments((prev) => prev.filter((commentId) => commentId !== id));
    } else {
      setLikedComments((prev) => [...prev, id]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#0000000D", paddingBottom: 10 }}>
          <View style={[styles.commentItem]}>
            <View>
              <Image
                source={{ uri: faker.image.avatarGitHub() }}
                style={styles.profileImage}
              />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <Text style={styles.username}>
                {faker.person.fullName()} ·{" "}
                {faker.date.past().toLocaleDateString()}
              </Text>
              <Text>{comment}</Text>
              <View style={{ marginTop: 6, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    padding: 2,
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <AntDesign name={"like2"} size={14} />
                    <Text style={{ fontSize: 12, marginLeft: 5 }}>
                      {faker.number.int({ min: 10, max: 100 })}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 15,
                    }}>
                    <AntDesign name={"dislike2"} size={14} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {commentData.map((item) => (
          <View key={item.id} style={{ paddingLeft: 40 }}>
            <View style={[styles.commentItem]}>
              <View>
                <Image
                  source={{ uri: item.user.image }}
                  style={styles.profileImage}
                />
              </View>
              <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <Text style={styles.username}>
                  {item.user.name} · {item.createdAt}
                </Text>
                <Text>{item.comment}</Text>
                <View style={{ marginTop: 6, flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => handleLike(item.id)}
                    style={{
                      padding: 2,
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}>
                      {likedComments.includes(item.id) ? (
                        <AntDesign name={"like1"} size={14} />
                      ) : (
                        <AntDesign name={"like2"} size={14} />
                      )}
                      <Text style={{ fontSize: 12, marginLeft: 5 }}>
                        {item.likes}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 15,
                      }}>
                      <AntDesign name={"dislike2"} size={14} />
                      <Text style={{ fontSize: 12, marginLeft: 5 }}>
                        {item.dislikes}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {faker.number.int({ min: 1, max: 10 }) % 2 === 0 && (
                    <TouchableOpacity>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: 20,
                        }}>
                        <MaterialCommunityIcons
                          name={"comment-text-outline"}
                          size={14}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 5 }}>
                          {item.id + 4}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginTop: 20,
    paddingLeft: 4,
    backgroundColor: "#fff",
  },
  commentItem: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  profileImage: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  username: {
    color: "#949494",
    fontSize: 12,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  textInputStyle: {
    width: "100%",
    color: "#efefef",
    paddingLeft: 10,
    height: 60,
  },
});
