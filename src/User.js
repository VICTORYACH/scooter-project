class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
    this.registered = false;
  }

  register() {
    if (this.age < 18 || this.registered) {
      console.log("User cannot register");
      return;
    }
    this.registered = true;
    console.log("User registered successfully");
  }

  login(password) {
    if (!this.registered || this.password !== password) {
      console.log("User cannot login");
      return;
    }
    this.loggedIn = true;
    console.log("User logged in successfully");
  }

  logout() {
    if (!this.loggedIn) {
      console.log("User cannot logout");
      return;
    }
    this.loggedIn = false;
    console.log("User logged out successfully");
  }
}

module.exports = User
