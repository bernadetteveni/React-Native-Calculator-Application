// Import React
import React from "react";
import {
  // To access css elements
  StyleSheet,
  // To display text
  Text,
  // Used to build UI
  View,
  // To vibrate the device
  Vibration,
  // Respond to and display touch feedback
  TouchableNativeFeedback,
  // Renders button element
  Button,
  // Renders toggle switch element
  Switch,
} from "react-native";
// Import useState core components to access 'state' without needing classes
import { useState } from "react";
// Import settings gear icon
import { AntDesign } from "@expo/vector-icons";
// Import DataTable components to display data as a table
import { DataTable } from "react-native-paper";
// Import light and dark theme variables from Theme.js
import { lightTheme, darkTheme } from "./Theme";

export default function Calculator() {
  // Set display state to empty string
  const [display, setDisplay] = useState("");
  // Set vibration toggle default state (isEnabled1) to true
  const [isEnabled1, setIsEnabled1] = useState(true);
  // When the vibration switch is toggled, the state will become the inverse of the original state
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  // Set dark theme toggle default state (isEnabled2) to true
  const [isEnabled2, setIsEnabled2] = useState(true);
  // When the dark theme switch is toggled, the state will become the inverse of the original state
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    // Toggling the dark theme switch will call the themeToggler function
    themeToggler();
  };
  // Set the default theme (themes) to the dark theme
  const [themes, setTheme] = useState(darkTheme);

  // When the dark mode switch is toggled (from enabled state to disabled state and back) the themes state will change from dark to light
  function themeToggler() {
    if (!isEnabled2) {
      setTheme(darkTheme);
    }
    if (isEnabled2) {
      setTheme(lightTheme);
    }
  }

  // Default state of settingsCondition is "OFF", in other words, settings screen is not visible
  const [settingsCondition, setSettingsCondition] = useState("OFF");

  // Changes settingsCondition state to "ON", settings screen will become visible
  var changeSettingsOn = () => {
    setSettingsCondition("ON");
    vibrate();
  };

  // Changes settingsCondition state to "OFF", settings screen will not be visible
  var changeSettingsOff = () => {
    setSettingsCondition("OFF");
    vibrate();
  };

  // If the vibrations switch is enabled the function will call the Vibration API and vibrate the device for 100 milliseconds
  function vibrate() {
    if (isEnabled1 == true) {
      Vibration.vibrate(100);
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

  // Function which is passed onPress() button 'userPressedButton' and adds it to the display (screen)
  function addButtonToDisplay(userPressedButton) {
    // If a user presses the delete button
    if (userPressedButton === "DEL") {
      vibrate();
      // Check whether the expression is valid or not
      if (display == undefined || display == null) {
        console.log("Nothing to delete.");
        return;
      }
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
      // Check if the expression is in a valid format
      try {
        // Go to calculate function
        calculate();
        return;
      } catch (error) {
        console.log("Error calculating");
        return;
      }
    }
    vibrate();
    // If a user presses any other button, it is concatenated to the display string
    setDisplay(display + userPressedButton);
  }

  // Function which calculates the operation on the display (screen)
  function calculate() {
    // Set the last char in the display string as lastCharInDisplay
    let lastCharInDisplay = display[display.length - 1];

    // If the last char in the display is not a number, it cannot be calculated; return
    if (
      lastCharInDisplay === "+" ||
      lastCharInDisplay === "-" ||
      lastCharInDisplay === "*" ||
      lastCharInDisplay === "/" ||
      lastCharInDisplay === "."
    ) {
      return;
    } else {
      // Use the eval() function to evaluates the display string as if it were an expression, and toString() to return the result in string format
      setDisplay(eval(display).toString());
      return;
    }
  }

  return (
    // The application UI will be dark theme or light theme depending on the state of 'themes'
    <View theme={themes === darkTheme ? darkTheme : lightTheme}>
      <>
        {/* When settingsCondition state is "ON", the settings screen will be visible */}
        {settingsCondition === "ON" && (
          <>
            {/* Settings button icon will trigger changeSettingsOff on press, settingsCondition state will become "OFF" and settings screen will no longer be visible*/}
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
                {/* Vibrations toggle */}
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
                {/* Dark mode toggle */}
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
                  {/* TouchableNativeFeedback is used to encapsulate buttons which will trigger a vibration feedback */}
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
