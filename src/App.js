import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';
import BootstrapReactRegister from './componets/BootstrapReactRegister';
const auth = getAuth(app);

// const handleRegister = (event) => {
//   event.preventDefault();
//   //console.log(event.target.email.value);
//   const email = event.target.email.value;
//   const pass = event.target.password.value;
//   console.log(email, pass)
// }
// const handleonBlurEmail = (event) => {
//   console.log(event.target.value);
// }
// const handleonBlurPass = (event) => {
//   console.log(event.target.value)
// }

function App() {
  return (
    <div className="">
      <BootstrapReactRegister></BootstrapReactRegister>
      {/* <form onSubmit={handleRegister}>
        <input onBlur={handleonBlurEmail} ype="email" name="email" id="" placeholder='Enter Your Email' />
        <br />
        <input onBlur={handleonBlurPass} type="password" name="password" id="" placeholder='Enter Your Password' />
        <br />
        <button type="submit">Register</button>
      </form> */}
    </div>
  );
}

export default App;
