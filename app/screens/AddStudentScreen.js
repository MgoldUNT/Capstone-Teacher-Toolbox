import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function App() {
    const [name, setName] = useState();
    const [user, setUser] = useState();
    const [students, setStudents] = useState();
    const [classID, setClassID] = useState();
    const [studentID, setStudentID] = useState();
    const [studentName, setStudentName] = useState();
    const [image_url, setImage_url] = useState();
    const [grade, setGrade] = useState();
    const [attendace, setAttendace] = useState();
    const [seatID, setSeatID] = useState();

    const [students2, setStudents2] = useState();


    const save = async () => {
        try {
            //await AsyncStorage.clear()
            if(user === undefined){
                setUser([])
            }

            let temp = {
              classID: classID,
              studentID: studentID,
              studentName: studentName,
              image_url: "Image URL Here 1 ",
              grade: "Grade Here",
              attendace: "Present",
              seatID: seatID,
            };

            user.push(temp);

            await AsyncStorage.setItem("MyName", JSON.stringify(user));


        } catch (err) {
            alert(err)
        }


    }

    const load = async () => {
        try {
            setUser([])
            let jsonValue = await AsyncStorage.getItem("MyName")

            if (jsonValue !== null) {
                setName(jsonValue)
                setUser(JSON.parse(jsonValue))
            }
        } catch (err) {
            alert(err);
        }
    }

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("MyName");
        } catch (err) {
            alert(err);
        } finally {
            setName("")
        }
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={{ height: 30 }}>
              <Text>{name}</Text>
            </ScrollView>

            <TextInput style={styles.input} placeholder="Class ID ie:C2-1230" onChangeText={(text) => setClassID(text)} />
            <TextInput style={styles.input} placeholder="Student ID ie:11257911" onChangeText={(text) => setStudentID(text)} />
            <TextInput style={styles.input} placeholder="Student Name" onChangeText={(text) => setStudentName(text)} />
            <TextInput style={styles.input} placeholder="Seat Location ie:1" onChangeText={(text) => setSeatID(text)} />

            <TouchableOpacity style={styles.button} onPress={() => save()} >
                <Text style={{ color: "white" }}>Save Student</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => remove()} >
                <Text style={{ color: "white" }}>Clear All Students</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => load()} >
                <Text style={{ color: "white" }}>Load All Students</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: "300",
    },
    input: {
        borderWidth: 1,
        borderColor: 'orange',
        alignSelf: "stretch",
        margin: 13,
        height: 64,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: "300",
    },
    button: {
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 5,
        marginBottom: 18,
        marginHorizontal: 32,
        borderRadius: 6,
    }

});

/*
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Student Name</Text>
                <TouchableOpacity onPress={this.saveData}>
                    <Text>click me to save data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.displayData}>
                    <Text>click me to display data</Text>
                </TouchableOpacity>
            </View>
        )
    }

    saveData() {
        let obj = {
            name: 'John Doe',
            email: 'test@gmail.com',
            city: 'Stockholm',
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            alert(parsed.email);
        }
        catch(error) {
            alert(error);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
*/