import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
    const [courseGoals, setCourseGoal] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)

    const addGoalHandler = goalTitle => {
        setCourseGoal(currentGoals => [
            ...courseGoals,
            { id: Math.random().toString(), value: goalTitle }
        ])
        setIsAddMode(false)
    }

    const removeGoalHandler = goalId => {
        setCourseGoal(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        onDelete={removeGoalHandler}
                        title={itemData.item.value}
                    />
                )}
            />
        </View>
        // <View
        // 	style={{
        // 		width: '80%',
        // 		height: 300,
        //     padding: 50,
        //     flexDirection:'row',
        // 		justifyContent: 'space-around',
        // 		alignItems: 'stretch',
        // 	}}
        // >
        // 	<View style={{backgroundColor:'red', flex:1, justifyContent:'center',alignItems:'center'}}>
        // 		<Text>1</Text>
        // 	</View>
        // 	<View style={{backgroundColor:'blue', flex:1, justifyContent:'center',alignItems:'center'}}>
        // 	<Text>2</Text>
        // 	</View>
        // 	<View style={{backgroundColor:'green',flex:1, justifyContent:'center',alignItems:'center'}}>
        //   <Text>3</Text>
        // 	</View>
        // </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
})
