import React, { useState } from 'react'
import GoalItem from './GoalItem'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
            </View>
        </Modal>
    )
}

// function GoalInput(props){}

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
})

export default GoalInput