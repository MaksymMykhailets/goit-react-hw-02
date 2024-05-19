import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import './App.module.css';

const App = () => {
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options />
      <Feedback />
    </>
  );
};

export default App;
