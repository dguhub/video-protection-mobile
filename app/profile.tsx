/** @format */

import { faker } from "@faker-js/faker/.";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Profile() {
  return (
    <View>
      <View>
        <Image source={{ uri: "https://via.placeholder.com/150" }} />
        <View>
          <Text>{faker.person.fullName()}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeTabText: {
    color: "#fff",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
