import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstTab = () => (
  <View style={styles.tabContent}>
    <Text>첫 번째 탭</Text>
  </View>
);

const SecondTab = () => (
  <View style={styles.tabContent}>
    <Text>두 번째 탭</Text>
  </View>
);

const RightBottomTabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first1", title: "Result" },
    { key: "second1", title: "Query history" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first1: FirstTab,
        second1: SecondTab,
      })}
      onIndexChange={setIndex}
      style={{ flex: 1 }}
    />
  );
};

const MacOSLayout = () => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      {/* 왼쪽 컬럼 */}
      <View style={styles.leftColumn}>
        <Text>왼쪽 컬럼</Text>
      </View>

      {/* 오른쪽 컬럼 */}
      <View style={styles.rightColumn}>
        {/* 위쪽 Row (입력창 + 버튼 4개) */}
        <View style={styles.topRow}>
          {/* 입력창 */}
          <TextInput
            caretHidden={false}
            cursorColor="#000"// 커서 색상을 검은색으로 변경
            style={styles.input}
            placeholder="여기에 입력하세요..."
            value={inputText}
            onChangeText={setInputText}
          />

          {/* 버튼 그룹 */}
          <View style={styles.buttonGroup}>
            {["버튼1", "버튼2", "버튼3", "버튼4"].map((label, index) => (
              <TouchableOpacity key={index} style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 아래쪽 Row (탭 포함) */}
        <View style={styles.bottomRow}>
          <RightBottomTabs />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 3,
    height: 40,
    width: "100%",
    borderColor: "#999",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 0,
    backgroundColor: "#fff", // 흰색 배경 유지
    color: "#000", // 입력한 텍스트 색상을 검은색으로 변경
    //placeholderTextColor: "#888", // 플레이스홀더 색상을 회색으로 변경
  },
  container: { flex: 1, flexDirection: "row" },
  leftColumn: { flex: 1, backgroundColor: "#ddd", justifyContent: "center", alignItems: "center" },
  rightColumn: { flex: 3, flexDirection: "column" },

  /* 위쪽 Row (입력창 + 버튼 4개) */
  topRow: { flex: 1, flexDirection: "column", backgroundColor: "#ccc", alignItems: "center", padding: 0 },
  // input: { flex: 4, height: 40, width: "100%", borderColor: "#999", borderWidth: 1, paddingHorizontal: 10, backgroundColor: "#fff" },
  buttonGroup: { flex: 1, flexDirection: "row", width: "100%", justifyContent: "space-between", margin: 0 },
  button: { flex: 1, backgroundColor: "#888", paddingVertical: 5, marginVertical: 0, marginHorizontal: 2, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 14 },

  /* 아래쪽 Row (탭 포함) */
  bottomRow: { flex: 2, backgroundColor: "#bbb" },

  /* 탭 화면 스타일 */
  tabContent: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" },
});

export default MacOSLayout;
