import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

 


// const SecondTab = ({ queryHistory }: { queryHistory: string[] }) =>(
//   <View style={styles.tabContent}>
//     <Text>첫 번째 탭</Text>
//   </View>
// );
const FirstTab = () => {

  return (
    <View style={styles.tabContent}>
        <Text>1111 history</Text>
    </View>
  );
};

const SecondTab = ({ queryHistory }: { queryHistory: string[] }) => (
  <View style={styles.tabContent}>
    <ScrollView 
    style={styles.historyContainer}
    contentContainerStyle={{ alignItems: "flex-start", width: "100%" }} 
    >
      {queryHistory.length > 0 ? (
        queryHistory.map((item, index) => (
          <Text key={index} style={styles.historyText}>
            {item}
          </Text>
        ))
      ) : (
        <Text style={styles.historyText}>No history</Text>
      )}
    </ScrollView>
  </View>
);

const CustomTabView = ({ queryHistory, activeTab, setActiveTab }: { queryHistory: string[], activeTab: "first" | "second", setActiveTab: (tab: "first" | "second") => void }) => {

  return (
    <View style={styles.container2}>
      {/* 상단 탭 버튼 */}
      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "first" && styles.activeTab]}
          onPress={() => setActiveTab("first")}
        >
          <Text style={styles.buttonText}>Result</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "second" && styles.activeTab]}
          onPress={() => setActiveTab("second")}
        >
          <Text style={styles.buttonText}>Query history</Text>
        </TouchableOpacity>
      </View>

      {/* 선택된 탭의 컨텐츠 */}
      {activeTab === "first" ? <FirstTab /> : <SecondTab queryHistory={queryHistory}/>}
    </View>
  );
};

const MacOSLayout = () => {
  const [inputText, setInputText] = useState("");
  const [queryHistory, setQueryHistory] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"first" | "second">("first");

  const handleRun = () => {
    console.log("Run 버튼 클릭");
    if (inputText.trim().length > 0) {
      setQueryHistory((prevHistory) => [inputText, ...prevHistory]); // 새로운 입력값을 히스토리 앞에 추가
      setActiveTab("second"); 
    }
  };

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
            multiline={true}
            onChangeText={setInputText}
          />

          {/* 버튼 그룹 */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={handleRun}>
              <Text style={styles.buttonText}>Run</Text>
            </TouchableOpacity>
            {["버튼2", "버튼3", "버튼4"].map((label, index) => (
              <TouchableOpacity key={index} style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 아래쪽 Row (탭 포함) */}
        <View style={styles.bottomRow}>
          <CustomTabView queryHistory={queryHistory} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: { flex: 1, backgroundColor: "#f0f0f0" },
  tabButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ddd",
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#bbb",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
  },
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
  // buttonText: { color: "#fff", fontSize: 14 },

  /* 아래쪽 Row (탭 포함) */
  bottomRow: { flex: 2, backgroundColor: "#bbb" },

  /* 탭 화면 스타일 */
  // tabContent: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" },
  // tabContent: {
  //   flex: 1, // ✅ SecondTab이 화면을 차지하도록 설정
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#f0f0f0",
  // },

  /* Query history 스타일 */
  historyContainer: { flex: 1, width:"100%", padding: 10},
  historyText: { fontSize: 16, paddingVertical: 5, color: "#000" },
});

export default MacOSLayout;
