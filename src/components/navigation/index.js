import React from "react";
import IsDarkMode from "../../helpers/isDarkMode";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    const isDarkMode = IsDarkMode()
    document.getElementById("body").setAttribute("data-darkmode", isDarkMode);
    this.setState({
      darkMode: isDarkMode
    })
  }

  toggleDarkMode() {
    const darkMode = this.state.darkMode

    this.setState({
      darkMode: !darkMode
    }, () => {
      localStorage.setItem("DARK_MODE", this.state.darkMode);
      document.getElementById("body").setAttribute("data-darkmode", this.state.darkMode);
    })
  }

  render() {
    return (
      <div>
        Navigation Goes here
        <button onClick={this.toggleDarkMode}>Turn the lights off</button>
      </div>
    )
  }
}

export default Navigation;