import { View } from 'react-native';
import React from 'react';

import { globalStyles } from '@/styles/global-styles';

import CustomText from '@/components/CustomText';
import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {
  const {
    formula,
    previousNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLastCharacter,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateTotal,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <CustomText variant="h1">{formula}</CustomText>
        {formula === previousNumber ? (
          <CustomText variant="h2"> </CustomText>
        ) : (
          <CustomText variant="h2">{previousNumber}</CustomText>
        )}
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="C" color={Colors.darkGray} onPress={clean} />
        <CalculatorButton
          label="+/-"
          color={Colors.darkGray}
          onPress={toggleSign}
        />
        <CalculatorButton
          label="del"
          color={Colors.darkGray}
          onPress={deleteLastCharacter}
        />
        <CalculatorButton
          label="÷"
          blackText={false}
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => buildNumber('7')}
        />
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => buildNumber('8')}
        />
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => buildNumber('9')}
        />
        <CalculatorButton
          label="X"
          blackText={false}
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => buildNumber('4')}
        />
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => buildNumber('5')}
        />
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => buildNumber('6')}
        />
        <CalculatorButton
          label="-"
          blackText={false}
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => buildNumber('1')}
        />
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => buildNumber('2')}
        />
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => buildNumber('3')}
        />
        <CalculatorButton
          label="+"
          blackText={false}
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          color={Colors.darkGray}
          onPress={() => buildNumber('0')}
        />
        {/* <CalculatorButton label="0" color={Colors.darkGray} onPress={() => buildNumber("0")} /> */}
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => buildNumber('.')}
        />
        <CalculatorButton
          label="="
          blackText={false}
          color={Colors.orange}
          onPress={calculateTotal}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
