export default {
  firstName: {
    key: "firstName",
    value: "",
    placeholder: "First name",
    valid: false,
    touched: false,
    type: "text",
    icon: {
      faIcon: "passport",
      color: "blue"
    },
    warningText: "",
    rule: { minLength: 2 }
  },
  lastName: {
    key: "lastName",
    value: "",
    placeholder: "Last name",
    valid: false,
    touched: false,
    type: "text",
    icon: {
      faIcon: "passport",
      color: "blue"
    },
    warningText: "",
    rule: { minLength: 2 }
  },
  username: {
    key: "username",
    value: "",
    placeholder: "username",
    valid: false,
    touched: false,
    type: "text",
    icon: {
      faIcon: "at",
      color: "orange"
    },
    warningText: "Must be 5-20 characters long.",
    rule: { minLength: 5, maxLength: 20 }
  },
  email: {
    key: "email",
    value: "",
    placeholder: "email",
    valid: false,
    touched: false,
    type: "email",
    icon: {
      faIcon: "envelope",
      color: "grey"
    },
    warningText: "Must be correct email.",
    rule: { isEmail: true }
  },
  phone: {
    key: "phone",
    value: "",
    placeholder: "phone",
    valid: false,
    touched: false,
    type: "phone",
    icon: {
      faIcon: "phone",
      color: "#0C7489"
    },
    warningText: "Must be correct phone number.",
    rule: { isPhone: true }
  },
  password: {
    key: "password",
    value: "",
    placeholder: "Create password",
    valid: false,
    touched: false,
    type: "password",
    icon: {
      faIcon: "lock-open",
      color: "#073B4C"
    },
    warningText: "Must be 6-20 characters long.",
    rule: { minLength: 6, maxLength: 20 }
  },
  repeatedPassword: {
    key: "repeatedPassword",
    value: "",
    placeholder: "Repeat password",
    valid: false,
    touched: false,
    type: "password",
    icon: {
      faIcon: "lock",
      color: "#073B4C"
    },
    warningText: "Passwords do not match.",
    rule: { shouldEqual: "" }
  }
};
