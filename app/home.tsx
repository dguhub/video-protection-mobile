/** @format */

import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import VideoItem from "@/components/VideoItem";
import { videos } from "@/assets/video";
import { router } from "expo-router";

export default function HomeScreen() {
  const renderItem = ({ item }: any) => (
    <VideoItem
      thumbnail={item.thumbnail}
      duration={item.duration}
      avatar={item.avatar}
      title={item.title}
      metadata={item.metadata}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo}>
          <AntDesign name="API" size={24} color="red" />
          <Text style={styles.logoText}>Metube</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="bell-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.scrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Tất cả</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Đề xuất mới</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Âm nhạc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Podcast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Trò chơi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Danh sách kết hợp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Trực tiếp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Đọc rap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Hoạt họa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Mới tải lên gần đây</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Gửi ý kiến phản hồi</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        style={styles.container}
      />

      {/* Footer */}
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navigationItem}>
          <Feather name="home" size={24} color="black" />
          <Text style={styles.navigationItemText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationItem}>
          <Feather name="youtube" size={24} color="black" />
          <Text style={styles.navigationItemText}>Shorts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navigationItem, styles.navigationItemIconCenter]}>
          <AntDesign name="pluscircleo" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationItem}>
          <Feather name="home" size={24} color="black" />
          <Text style={styles.navigationItemText}>Kênh đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationItem}
          onPress={() => router.push("/profile")}>
          <Feather name="user" size={24} color="black" />
          <Text style={styles.navigationItemText}>Bạn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  scrollView: {
    padding: 10,
    backgroundColor: "#fff",
  },
  activeTab: {
    backgroundColor: "#000",
    color: "#fff",
  },
  activeTabText: {
    color: "#fff",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  tabText: {
    color: "#000",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  navigation: {
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navigationItem: {
    alignItems: "center",
  },
  navigationItemText: {
    fontSize: 8,
  },
  navigationItemIconCenter: {
    transform: [{ translateY: -8 }],
  },
});
