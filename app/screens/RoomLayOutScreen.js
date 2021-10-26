import React, { useEffect, userContext, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Animated,
  Dimensions,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { globalStyles } from "../global";

const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
const TakeRollPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            globalStyles.container,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const RandomStudentPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            globalStyles.container,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ChangeLayOutPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const RoomLayOutScreen = ({ navigation }) => {
  //Sets the Title to ''
  const selectedData = useSelector((state) => state.reducer.classID);
  const Students = useSelector((state) => state.StudentReducer.listOfStudents);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <View>
      <TakeRollPopUp visible={visible1}>
        <View
          style={[
            globalStyles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "column",
            },
          ]}
        >
          <View style={[styles.box1, { flexDirection: "row" }]}>
            <TouchableOpacity
              style={{
                poisiton: "absolute",
                left: H / 4 + 20,
                top: -129,
              }}
              onPress={() => setVisible1(false)}
            >
              <Text style={{ fontSize: 20 }}> x</Text>
            </TouchableOpacity>

            <View>
              <View style={styles.photo}>
                <Text>Photo</Text>
              </View>
              <Text style={{ fontSize: 30 }}>Student Name</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  top: "15%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 0.75,
                    backgroundColor: "#ff7d7d",
                    borderRadius: 16,
                    width: "42%",
                    height: "200%",
                    alignItems: "center",
                    justifyContent: "center",
                    left: -7,
                    padding: 10,
                  }}
                >
                  <Text>Absent</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 0.75,
                    backgroundColor: "#80e37b",
                    borderRadius: 16,
                    width: "60%",
                    height: "200%",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    left: 7,
                  }}
                >
                  <Text>Present</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TakeRollPopUp>

      <RandomStudentPopUp visible={visible2}>
        <View
          style={[
            globalStyles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "column",
            },
          ]}
        >
          <View style={[styles.box1, { flexDirection: "row" }]}>
            <View>
              <View style={styles.photo}>
                <Text>Photo</Text>
              </View>
              <Text style={{ fontSize: 30 }}>Student Name</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  top: "15%",
                }}
              >
                <Button
                  title="Cancel"
                  color="#528282"
                  onPress={() => setVisible2(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </RandomStudentPopUp>

      <ChangeLayOutPopUp visible={visible3}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}></View>
          <View>
            <Text style={styles.modalText}>
              Do you fish to make changes to the Room Lay Out?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                top: "4%",
              }}
            >
              <Button
                title="Cancel"
                color="#528282"
                onPress={() => setVisible3(false)}
              />
              <Button title="Confim" />
            </View>
          </View>
        </View>
      </ChangeLayOutPopUp>
      <Text style={globalStyles.baseText}>Class {selectedData}</Text>

      <FlatList
        data={Students}
        renderItem={({ item }) => (
          <View>
            <Text>
              <Button
                title={item.studentID}
                onPress={() =>
                  navigation.navigate("StudentScreen", {
                    name: "StudentScreen",
                  })
                }
              />
            </Text>
          </View>
        )}
        keyExtractor={(item, studentID) => studentID.toString()}
      />

      <View style={styles.thinline}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: H - 200,
          width: "99%",
        }}
      >
        <TouchableOpacity style={styles.box} onPress={() => setVisible1(true)}>
          <Text style={styles.buttonText}>Take Roll</Text>
          <Image
            style={styles.tinyIcon}
            source={require("../assets/Checklist.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => setVisible2(true)}>
          <Text style={styles.buttonText}>Call Random Student</Text>
          <Image
            style={styles.tinyIcon}
            source={require("../assets/Hand.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.buttonText}>Something Else</Text>
          <Image
            style={styles.tinyIcon}
            source={require("../assets/Checklist.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback>
        <TouchableOpacity
          style={styles.leftBox}
          onPress={() => setVisible3(true)}
        >
          <View style={styles.tinyDot}></View>
          <View style={styles.tinyDot}></View>
          <View style={styles.tinyDot}></View>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: W / 3,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyDot: {
    width: 5,
    height: 5,
    backgroundColor: "#545454",
    borderRadius: 5 / 2,
    margin: 2,
    top: 15,
  },
  leftBox: {
    right: -5,
    top: 0,
    position: "absolute",
    alignItems: "center",
    alignContent: "center",
    width: 60,
    height: 60,
  },
  buttonText: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
    margin: 12,
    textAlignVertical: "center",
    color: "#757575",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    color: "#363636",
  },
  box1: {
    flex: 0.25,
    backgroundColor: "white",
    borderRadius: 18,
    padding: 60,
    elevation: 2,
    top: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    height: 140 * 0.8,
    width: 140 * 0.8,
    borderRadius: (200 * 0.8) / 2,
    left: 35,
    bottom: 15,
    borderColor: "#d6d6d6",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyIcon: {
    height: H * 0.05,
    width: W * 0.1,
  },
  thinline: {
    width: W,
    height: 1,
    backgroundColor: "grey",
    top: H * 0.75,
    position: "absolute",
  },
});

export default RoomLayOutScreen;
