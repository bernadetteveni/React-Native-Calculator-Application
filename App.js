// Import React
import React from "react";
// Import React Native’s StylesSheet, Text, and View core components
import {
  StyleSheet,
  Text,
  View,
  Vibration,
  TouchableNativeFeedback,
  Alert,
  Button,
  Switch,
} from "react-native";
// Import React Native’s useState core components to access 'state' without needing classes
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import { lightTheme, darkTheme } from "./Theme";
import { useTheme } from "@react-navigation/native";

export default function Calculator() {
  // Set display state to empty string
  const [display, setDisplay] = useState("");

  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [themes, setTheme] = useState(darkTheme);
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    themeToggler();
  };

  function themeToggler() {
    if (!isEnabled2) {
      setTheme(darkTheme);
    }
    if (isEnabled2) {
      setTheme(lightTheme);
    }
  }

  // Create array of buttons
  const buttons = [
    "CLEAR",
    "DEL",
    "/",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    ".",
    9,
    0,
    "=",
  ];

  function vibrate() {
    if (isEnabled1 == true) {
      Vibration.vibrate(100);
    } else {
      Vibration.cancel();
    }
  }

  // Function which is passed onPress() button 'userPressedButton' and adds it to the display (screen)
  function addButtonToDisplay(userPressedButton) {
    // If a user presses the delete button
    if (userPressedButton === "DEL") {
      vibrate();
      // The substring of the display is taken from the first char of the string (pos 0) to the second last char of the string (pos length-1)
      // The last char is 'deleted' from the string
      setDisplay(display.substring(0, display.length - 1)); // Copy all chars but the last one
      return;
      // If a user presses the clear button
    } else if (userPressedButton === "CLEAR") {
      vibrate();
      // Set display to empty string
      setDisplay("");
      return;
      // If a user presses the '=' button
    } else if (userPressedButton === "=") {
      vibrate();
      // Go to calculate function
      calculate();
      return;
    }
    vibrate();
    // If a user presses any other button, it is concatenated to the display string
    setDisplay(display + userPressedButton);
  }

  // Function which calculates the operation on the display (screen)
  function calculate() {
    // Check if the expression is in a valid format

    console.log("display", display.toString());

    // Set the last char in the display string as lastCharInDisplay
    let lastCharInDisplay = display[display.length - 1];

    // If the last char in the display is not a number, it cannot be calculated; return
    if (
      lastCharInDisplay === "+" ||
      lastCharInDisplay === "-" ||
      lastCharInDisplay === "*" ||
      lastCharInDisplay === "/" ||
      lastCharInDisplay === "." ||
      lastCharInDisplay === null ||
      lastCharInDisplay === ""
    ) {
      return;
    } else {
      // Use the eval() function to evaluates the display string as if it were an expression, and toString() to return the result in string format
      setDisplay(eval(display).toString());
      return;
    }
  }

  const [settingsCondition, setSettingsCondition] = useState("OFF");

  var changeSettingsOn = () => {
    setSettingsCondition("ON");
    vibrate();
  };

  var changeSettingsOff = () => {
    setSettingsCondition("OFF");
    vibrate();
  };

  return (
    <View theme={themes === darkTheme ? darkTheme : lightTheme}>
      <>
        {settingsCondition === "ON" && (
          <>
            <View style={[themes.settings]}>
              <View style={themes.settingsContainer}>
                <AntDesign
                  name="setting"
                  size={37}
                  color="#A9A9A9"
                  onPress={changeSettingsOff}
                />
              </View>
              <Text style={[themes.settingsTitle]}>Settings</Text>
              <DataTable.Row>
                <Text style={[themes.secondaryText]}>Vibrations</Text>
                <DataTable.Cell></DataTable.Cell>
                <Switch
                  style={[themes.toggleContainer]}
                  trackColor={{ false: "#4d4d4d", true: "#7FFF00" }}
                  thumbColor={isEnabled1 ? "#F8F8FF" : "#F8F8FF"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </DataTable.Row>
              <DataTable.Row>
                <Text style={[themes.secondaryText]}>Dark Mode</Text>
                <DataTable.Cell></DataTable.Cell>
                <Switch
                  style={[themes.toggleContainer]}
                  trackColor={{ false: "#4d4d4d", true: "#7FFF00" }}
                  thumbColor={isEnabled2 ? "#F8F8FF" : "#F8F8FF"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </DataTable.Row>
            </View>
          </>
        )}
        <View>
          {/* Code for the screen display and text on screen */}
          <View style={themes.settingsContainer}>
            <AntDesign
              name="setting"
              size={37}
              color="#A9A9A9"
              onPress={changeSettingsOn}
            />
          </View>
          <View style={themes.display}>
            <Text style={themes.displayText}>{display}</Text>
          </View>
          {/* Code for the calculator buttons */}
          <View style={themes.buttonContainer}>
            {/* the buttons array retrieved by map() */}
            {buttons.map((button) =>
              // Maps action button/operators to the console, if it is an action button ...
              button === "=" ||
              button === "/" ||
              button === "*" ||
              button === "-" ||
              button === "+" ||
              button === "." ||
              button === "DEL" ||
              button === "CLEAR" ? (
                <View key={button} style={[themes.button]}>
                  <TouchableNativeFeedback
                    key={button} // Provide key 'button' when creating lists of elements.
                    onPress={() => addButtonToDisplay(button)} // When the button is pressed, pass the button type to the addButtonToDisplay function
                  >
                    {/* Display list of button keys */}
                    <Text key={button} style={[themes.actionButton]}>
                      {button}
                    </Text>
                  </TouchableNativeFeedback>
                </View>
              ) : (
                <View key={button} style={[themes.button]}>
                  {/* // If it is a text button */}
                  <TouchableNativeFeedback
                    key={button} // Provide key 'button' when creating lists of elements.
                    onPress={() => addButtonToDisplay(button)} // When the button is pressed, pass the button type to the addButtonToDisplay function
                  >
                    {/* Display list of button keys */}
                    <Text key={button} style={[themes.textButton]}>
                      {button}
                    </Text>
                  </TouchableNativeFeedback>
                </View>
              )
            )}
          </View>
        </View>
      </>
    </View>
  );
}
