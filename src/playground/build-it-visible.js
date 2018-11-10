class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      showDetails: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        showDetails: !prevState.showDetails
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
        {this.state.showDetails && <p>Hey. These are some detials you can now see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log('Build it! is running!');
//
// const app = {
//   title: 'Visibility Toggle',
//   showDetails: false
// };
//
// const appRoot = document.getElementById('app');
//
// const toggleButton = () => {
//   app.showDetails = !app.showDetails;
//   renderPage();
// };
//
// const renderPage = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleButton}>{app.showDetails ? 'Hide Details' : 'Show Details'}</button>
//       {app.showDetails && <p>Hey. These are some detials you can now see!</p>}
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// }
//
// renderPage();
