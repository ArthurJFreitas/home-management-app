import React, { useState } from 'react';
import { View, TouchableOpacity, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from '../../components/Text';
import * as Styled from './styles';

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
    <Styled.Container>
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
        {({
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
          values,
        }) => {
          return (
            <>
              <TextInput
                value={values.title || ''}
                onBlur={() => setFieldTouched('title')}
                onChangeText={handleChange('title')}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="To do"
              />

              <Text>{errors?.title}</Text>
              <Styled.AddButton
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Text color="#fff" size="50">
                  +
                </Text>
              </Styled.AddButton>
            </>
          );
        }}
      </Formik>
      {toDoList.map(({ title }) => {
        return (
          <View key={title}>
            <Text>{title}</Text>
            <TouchableOpacity onPress={() => handleRemove(title)}>
              <Text>Remover</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </Styled.Container>
  );
};

export default ToDoPage;
