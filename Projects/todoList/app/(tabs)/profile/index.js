import {ScrollView, Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

export default function Index() {
    const [completedTasks, setCompletedTasks] = useState(0);
    const [pendingTasks, setPendingTasks] = useState(0);

    const fetchTaskData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/count");
            const { totalCompletedTodo, totalPendingTodos } = res.data;
            setCompletedTasks(totalCompletedTodo);
            setPendingTasks(totalPendingTodos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTaskData();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Profile</Text>

            <View style={styles.taskContainer}>
                <View style={styles.taskCard}>
                    <Text style={styles.taskNumber}>{completedTasks}</Text>
                    <Text>Completed Tasks</Text>
                </View>
                <View style={styles.taskCard}>
                    <Text style={styles.taskNumber}>{pendingTasks}</Text>
                    <Text>Pending Tasks</Text>
                </View>
            </View>

            <View style={{
                padding: 10,
                justifyContent: "center",
            }}>
                <Text style={styles.chartTitle}>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["Pending Tasks", "Completed Tasks"],
                        datasets: [
                            {
                                data: [pendingTasks, completedTasks]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width - 30} // responsive width
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#ffffff", // Change background color
                        backgroundGradientFrom: "#ffffff", // Start gradient color
                        backgroundGradientTo: "#c9c9c9", // End gradient color
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,

                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#000000"
                        }
                    }}
                    bezier
                    style={styles.chart}
                />
            </View>
            
            <View style={{
                justifyContent: "center",
            }}>                <ProgressChart
                    data={{
                        labels: ["XP", "SP"],
                        data: [pendingTasks / (pendingTasks + completedTasks), completedTasks / (pendingTasks + completedTasks)]
                    }}
                    width={350} // responsive width
                    height={200}
                    
                    strokeWidth={30}
                    radius={30}
                    chartConfig={{
                        backgroundColor: "#ffffff", // Change background color
                        backgroundGradientFrom: "#ffffff", // Start gradient color
                        backgroundGradientTo: "#ffffff", // End gradient color
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Change this color
                        strokeWidth: 3, // optional, default 3
                        barPercentage: 0.5,
                        style: {
                            borderRadius: 16,
                            paddingLeft: 10
                        },
                    }}
                    style={styles.chart}
                    
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'black',
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    taskCard: {
        flexDirection: 'column',
        width: 150,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        margin: 10,
    },
    taskNumber: {
        fontSize: 24,
        fontWeight: 'bold',
    },
  
    chartTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    chart: {
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,
    }
});
