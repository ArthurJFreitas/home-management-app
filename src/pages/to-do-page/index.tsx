import React, { useState } from 'react';
import { View, TouchableOpacity, Button, TextInput } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import Text from '../../components/Text';

import * as Styled from './styles';

interface ToDoProps {
  title: string;
}

const ToDoPage = () => {
  const [toDoList, setToDoList] = useState<ToDoProps[]>([]);
  const [showBottomModal, setShowBottomModal] = useState(false);

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required('Campo obrigatório')
      .min(3, 'O titulo precisa de 3 letras pelo menos'),
  });

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
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
            <Styled.AddToDoWrapper>
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
                  sheetRef.current.snapTo(0);
                  setShowBottomModal(!showBottomModal);
                  // handleSubmit();
                }}
              >
                <Text color="#fff" size="50">
                  +
                </Text>
              </Styled.AddButton>
            </Styled.AddToDoWrapper>
          );
        }}
      </Formik>
    </View>
  );

  const handleRemove = (title: string) => {
    const newList = toDoList.filter((item: ToDoProps) => item.title !== title);
    setToDoList(newList);
  };

  const sheetRef = React.useRef(null);

  return (
    <>
      <Styled.Container>
        <Styled.DaysOfTheWeekWrapper>
          <Styled.DayWrapper>
            <Text size="18" weight="Bold">
              Segunda feira
            </Text>
            <Text size="18" weight="Light">
              01/11
            </Text>
          </Styled.DayWrapper>
          {toDoList.map(({ title }) => {
            return (
              <Styled.ToDo key={title}>
                <Text>{title}</Text>
                <TouchableOpacity onPress={() => handleRemove(title)}>
                  <Styled.Remove>
                    <Text size="18" weight="Bold" color="#fc0000">
                      X
                    </Text>
                  </Styled.Remove>
                </TouchableOpacity>
              </Styled.ToDo>
            );
          })}
        </Styled.DaysOfTheWeekWrapper>
        <Styled.AddButton
          onPress={() => {
            setShowBottomModal(!showBottomModal);
          }}
        >
          <Text color="#fff" size="50">
            +
          </Text>
        </Styled.AddButton>
      </Styled.Container>

      {showBottomModal && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[200, 300, 0]}
          borderRadius={10}
          renderContent={renderContent}
        />
      )}
    </>
  );
};

export default ToDoPage;
