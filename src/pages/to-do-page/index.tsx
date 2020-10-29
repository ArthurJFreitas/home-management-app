import React, { useState } from 'react'
import { View, Text, TouchableOpacity,Button, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

const ToDoPage = () => {
    const [toDoList, setToDoList] = useState([{ title: "5 socos por segundo" }])


    let validationSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório').min(4, "Ta tirando mermao"),
       
    })

    const handleRemove = (title:string) => {
        const newList = toDoList.filter((item: any) => item.title !== title)
        setToDoList(newList)
    }


    return (
        <View>

            <Formik
                validateOnBlur={true}
                initialValues={{
                    title: ""
                }}

                onSubmit={(values:any) => {
                    setToDoList([...toDoList, values])
                }}
            >
                {({ handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    handleSubmit,
                    values }) => (
                        <>
                            <TextInput
                                onBlur={() => setFieldTouched('title')}
                            
                                onChangeText={handleChange('title')}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="To do" />
                            <TouchableOpacity onPress={() => {
                                console.log('a')
                                handleSubmit()
                            }}>
                                <Text>Adicionar to do +</Text>
                            </TouchableOpacity>
                        </>
                    )

                }

            </Formik>

            {toDoList?.map(({ title }, key) =>
                <View key={key}>
                    <Text>{title}</Text>
                    <TouchableOpacity 
                        onPress={() => handleRemove(title)}
                    >
                        <Text>Remover</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View >
    )
}

export default ToDoPage