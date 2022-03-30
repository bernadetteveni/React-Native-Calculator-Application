{
  /* StyleSheet.create is used to define multiple style props (css) in one location */
}
export const darkTheme = {
  // Calculator display (screen)
  display: {
    width: "100%",
    height: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#202020",
  }, // Text that appears on display (screen)
  displayText: {
    color: "white",
    marginBottom: 20,
    marginRight: 25,
    marginLeft: 25,
    fontSize: 50,
  }, // Container for all calculator buttons
  buttonContainer: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#202020",
  }, // Individual calculator buttons
  button: {
    minWidth: "30%",
    minHeight: "14%",
    flex: 2,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 35,
    marginTop: 8,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }, // Styling for operators
  actionButton: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#f09a36",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  }, // Styling for operands
  textButton: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#a6a6a6",
    paddingLeft: 30,
    paddingRight: 30,
  },
  settings: {
    height: "100%",
    backgroundColor: "#202020",
  },
  settingsTitle: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 30,
  },
  settingsContainer: {
    margin: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: 38,
    backgroundColor: "#202020",
  },
  secondaryText: {
    color: "white",
    fontSize: 22,
    textAlign: "left",
    paddingLeft: 20,
  },
  toggleContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 20,
  },
};

export const lightTheme = {
  // Calculator display (screen)
  display: {
    width: "100%",
    height: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#efefef",
  }, // Text that appears on display (screen)
  displayText: {
    color: "black",
    marginBottom: 20,
    marginRight: 25,
    marginLeft: 25,
    fontSize: 50,
  }, // Container for all calculator buttons
  buttonContainer: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#efefef",
  }, // Individual calculator buttons
  button: {
    minWidth: "30%",
    minHeight: "14%",
    flex: 2,
    borderWidth: 5,
    borderColor: "#d9d9d9",
    borderRadius: 35,
    marginTop: 8,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }, // Styling for operators
  actionButton: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#4881ea",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  }, // Styling for operands
  textButton: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4d4d4d",
    paddingLeft: 30,
    paddingRight: 30,
  },
  settings: {
    height: "100%",
    backgroundColor: "#efefef",
  },
  settingsTitle: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 30,
  },
  settingsContainer: {
    margin: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: 38,
    backgroundColor: "#efefef",
  },
  secondaryText: {
    color: "black",
    fontSize: 22,
    textAlign: "left",
    paddingLeft: 20,
  },
  toggleContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 20,
  },
};
