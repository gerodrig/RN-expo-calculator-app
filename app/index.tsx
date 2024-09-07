import { View } from "react-native";
import React from "react";

import { globalStyles } from "@/styles/global-styles";

import CustomText from "@/components/CustomText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <CustomText variant="h1">50 x 50</CustomText>
        <CustomText variant="h2">2500</CustomText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="C" color={Colors.darkGray} onPress={() => console.log("C")} />
        <CalculatorButton label="+/-" color={Colors.darkGray} onPress={() => console.log("+/-")} />
        <CalculatorButton label="del" color={Colors.darkGray} onPress={() => console.log("del")} />
        <CalculatorButton
          label="÷"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" color={Colors.darkGray} onPress={() => console.log("7")} />
        <CalculatorButton label="8" color={Colors.darkGray} onPress={() => console.log("8")} />
        <CalculatorButton label="9" color={Colors.darkGray} onPress={() => console.log("9")} />
        <CalculatorButton
          label="X"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("X")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="4" color={Colors.darkGray} onPress={() => console.log("4")} />
        <CalculatorButton label="5" color={Colors.darkGray} onPress={() => console.log("5")} />
        <CalculatorButton label="6" color={Colors.darkGray} onPress={() => console.log("6")} />
        <CalculatorButton
          label="-"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="1" color={Colors.darkGray} onPress={() => console.log("1")} />
        <CalculatorButton label="2" color={Colors.darkGray} onPress={() => console.log("2")} />
        <CalculatorButton label="3" color={Colors.darkGray} onPress={() => console.log("3")} />
        <CalculatorButton
          label="+"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize color={Colors.darkGray} onPress={() => console.log("0")} />
        {/* <CalculatorButton label="0" color={Colors.darkGray} onPress={() => console.log("0")} /> */}
        <CalculatorButton label="." color={Colors.darkGray} onPress={() => console.log(".")} />
        <CalculatorButton
          label="="
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>



    </View>
  );
};

export default CalculatorApp;
