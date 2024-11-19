/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import COMMENTS from "@/assets/comments.json";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

const Comment = () => {
  const [commentData, setCommentData] = useState(COMMENTS);
  const [likedComments, setLikedComments] = useState<string[]>([]);

  const handleLike = (id: string) => {
    if (likedComments.includes(id)) {
      setLikedComments((prev) => prev.filter((commentId) => commentId !== id));
      setCommentData((prev) =>
        prev.map((comment) => {
          if (comment.id === id) {
            return { ...comment, likes: comment.likes - 1 };
          }
          return comment;
        })
      );
    } else {
      setLikedComments((prev) => [...prev, id]);
      setCommentData((prev) =>
        prev.map((comment) => {
          if (comment.id === id) {
            return { ...comment, likes: comment.likes + 1 };
          }
          return comment;
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={commentData}
        renderItem={({ item }: any) => {
          return (
            <View>
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
                    {item.id % 2 === 0 && (
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
              <View style={{ paddingLeft: 55, marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    router.push(`/comment-detail/${item.comment}`)
                  }>
                  <Text
                    style={{
                      color: "#065fd4",
                      fontWeight: "semibold",
                      fontSize: 13,
                    }}>
                    8 phản hồi
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%", marginTop: 20, paddingLeft: 4 },
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

export default Comment;
