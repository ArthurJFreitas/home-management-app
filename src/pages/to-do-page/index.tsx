import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

interface ToDoProps {
  title: string;
}

const ToDoPage = () => {
  const [toDoList, setToDoList] = useState<ToDoProps[]>([]);

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required('Campo obrigatório')
      .min(3, 'O titulo precisa de 3 letras pelo menos'),
  });

  const handleRemove = (title: string) => {
    const newList = toDoList.filter((item: ToDoProps) => item.title !== title);
    setToDoList(newList);
  };

  return (
    <View>
      <Formik
        validationSchema={validationSchema}
        validateOnBlur
            initialValues={{
          title: '',
        }}
        onSubmit={(values: ToDoProps, { resetForm }) => {
          setToDoList([...toDoList, values]);
          resetForm({});
        }}
          >
            {({ handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
          values,
                      <>
            <TextInput
                              value={values.title || ""}
              onBlur={() => setFieldTouched('title')}
                              onChangeText={handleChange('title')}
                              autoCapitalize="none"
              autoCorrect={false}
                              placeholder="To do"
                            />
                          <TouchableOpacity onPress={() => {
                handleSubmit();
              }}
            >
              <Text>Adicionar to do +</Text>
            </TouchableOpacity>
            <Text>{errors?.title}</Text>
          </>
        )}
      </Formik>

          {toDoList?.map(({ title }, key) => (
                <View key={key}>
                    <Text>{title}</Text>
                    <TouchableOpacity
                        onPress={() => handleRemove(title)}
                    >
                        <Text>Remover</Text>
                    </TouchableOpacity>
                </View>
              )
      ))}
    </View>
  );
};

export default ToDoPage;
