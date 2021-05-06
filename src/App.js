import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Now we hace Auth!
        </h1>       
      </header>
    </div>
  );
}

export default withAuthenticator(App);
