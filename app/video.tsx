/** @format */

import { videos } from "@/assets/video";
import VideoItem from "@/components/VideoItem";
import { FontAwesome } from "@expo/vector-icons";
import { faker } from "@faker-js/faker/.";
import { Video } from "expo-av";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const VideoScreen = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
        }}>
        <Video
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          style={{ height: 250 }}
          useNativeControls
        />
      </View>
      <ScrollView>
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text
            style={{
              fontWeight: 600,
              fontSize: 18,
            }}>
            {faker.lorem.sentence()}
          </Text>
          <View
            style={{
              marginTop: 6,
              marginBottom: 10,
              flexDirection: "row",
              gap: 10,
            }}>
            {/* total view */}
            <Text style={{ fontSize: 12, color: "#666" }}>
              {faker.number.int({ min: 1000, max: 1000000 })} luợt xem
            </Text>
            {/* time update  eg: 1 ngày trước */}
            <Text style={{ fontSize: 12, color: "#666" }}>
              {faker.date.recent().toLocaleDateString()}
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>...Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image
                source={{ uri: faker.image.url() }}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 100,
                }}
              />
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                {faker.person.fullName()}
              </Text>
              {/* total sub */}
              <Text style={{ fontSize: 14, color: "#666" }}>
                {faker.number.int({ min: 10, max: 100 })} N
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 5,
                borderRadius: 20,
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>
                Đăng kí
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 18,
            }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#00000009",
                paddingHorizontal: 12,
                paddingVertical: 9,
                borderRadius: 100,
              }}>
              <AntDesign name="like2" size={14} color="black" />
              <Text style={{ fontSize: 12, marginLeft: 4, color: "black" }}>
                100
              </Text>
              <View
                style={{
                  width: 1,
                  height: "100%",
                  backgroundColor: "black",
                  opacity: 0.1,
                  marginHorizontal: 4,
                }}
              />
              <AntDesign name="dislike2" size={14} color="black" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#00000009",
                paddingHorizontal: 12,
                paddingVertical: 9,
                borderRadius: 100,
              }}>
              {/* icon share */}
              <AntDesign name="sharealt" size={14} color="black" />
              <Text style={{ fontSize: 12, marginLeft: 4, color: "black" }}>
                Chia sẻ
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#00000009",
                paddingHorizontal: 12,
                paddingVertical: 9,
                borderRadius: 100,
              }}>
              {/* icon phối lại */}
              <FontAwesome name="mixcloud" size={14} color="black" />
              <Text style={{ fontSize: 12, marginLeft: 4, color: "black" }}>
                Phối lại
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#00000009",
                paddingHorizontal: 12,
                paddingVertical: 9,
                borderRadius: 100,
              }}>
              {/* icon download */}
              <AntDesign name="download" size={14} color="black" />
              <Text style={{ fontSize: 12, marginLeft: 4, color: "black" }}>
                Tải xuống
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            backgroundColor: "#0000000D",
            borderRadius: 8,
            paddingVertical: 16,
            marginHorizontal: 10,
          }}
          onPress={() => {
            router.push("/comment");
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: 500, marginRight: 6 }}>
              Bình luận
            </Text>
            <Text style={{ fontSize: 14, color: "#666" }}>
              {faker.number.int({ min: 10, max: 100 })}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
            }}>
            <Image
              source={{ uri: faker.image.url() }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: "#000",
                overflow: "hidden",
                paddingRight: 10,
              }}>
              {faker.lorem.sentence().substring(0, 40)}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 30, gap: 16 }}>
          {videos.map((item) => (
            <VideoItem
              key={item.id}
              thumbnail={item.thumbnail}
              duration={item.duration}
              avatar={item.avatar}
              title={item.title}
              metadata={item.metadata}
              styleBody={{
                paddingHorizontal: 10,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;
