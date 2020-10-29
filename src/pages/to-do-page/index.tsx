import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

const ToDoPage = () => {
    const [toDoList, setToDoList] = useState([{title: "5 socos por segundo"}])


    let validationSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório').min(4, "Ta tirando mermao"),
        email: yup.string().required('Campo obrigatório').email('Formato inválido'),
        phone: yup.string().required('Campo obrigatório').min(11, "Telefone inválido"),
        password: yup.string().required('Campo obrigatório').min(5, 'A senha precisa de no minimo 5 caracteres'),
        passwordConfirmation: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), ''], 'Senhas não coincidem')
    })


    return (
        <View>

            <Formik
                validateOnBlur={true}
                initialValues={{
                    title: ""
                }}
                onSubmit={(values: any) => {
                    console.log('a')
                    setToDoList([{title: "a"}])

                }}
                validationSchema={validationSchema}
            >
                {({ handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    handleSubmit,
                    values }) => (
                        <>
                            <TextInput placeholder="To do" />
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text>Adicionar to do +</Text>
                            </TouchableOpacity>
                        </>
                    )

                }

            </Formik>

            {toDoList?.map(({title},key) =>
                <View key={key}>
                    <Text>{title}</Text>
                </View>
                )}

        </View >
    )
}

export default ToDoPage