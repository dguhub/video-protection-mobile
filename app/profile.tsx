/** @format */

import { videos } from "@/assets/video";
import VideoItem from "@/components/VideoItem";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { faker } from "@faker-js/faker/.";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

export default function Profile() {
  return (
    <View style={{ paddingVertical: 10, marginTop: 30, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          width={70}
          height={70}
          source={{ uri: faker.image.avatarGitHub() }}
          style={{
            borderRadius: "100%",
            borderWidth: 1,
            borderColor: "#ccc",
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>
            {faker.person.fullName()}
          </Text>
          <Text>{faker.person.jobTitle()}</Text>
        </View>
      </View>

      <View style={styles.scrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Chuyển đổi tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Tài khoản Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Bật chế độ riêng tư</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Chia sẻ kênh</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.scrollView}>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
          Video đã xem
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 10 }}>
          {videos.slice(0, 6).map((item) => (
            <View key={item.id} style={{ paddingHorizontal: 5, width: 220 }}>
              <VideoItem
                isOnlyVideo
                thumbnail={item.thumbnail}
                duration={item.duration}
                avatar={item.avatar}
                title={item.title}
                metadata={item.metadata}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ gap: 10, marginTop: 10 }}>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <AntDesign name="videocamera" size={20} color="black" />
          <Text>Video của bạn </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <AntDesign name="download" size={20} color="black" />
          <Text>Nội dung tải xuống</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingBottom: 10,
          }}>
          <FontAwesome name="cut" size={20} color="black" />
          <Text>Đoạn cắt của bạn</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <FontAwesome name="film" size={20} color="black" />
          <Text>Phim của bạn</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingBottom: 10,
          }}>
          <AntDesign name="API" size={20} />
          <Text>Mua gói Youtube Premium</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Entypo name="time-slot" size={20} color="black" />
          <Text>Thời lượng xem</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Feather name="help-circle" size={20} color="black" />
          <Text>Trợ giúp và phản hồi</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#e6e6e6",
    marginRight: 10,
  },
  activeTabText: {
    color: "#fff",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#000",
  },

  activeTab: {
    backgroundColor: "#000",
    color: "#fff",
  },
});
