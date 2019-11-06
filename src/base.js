import Rebase from 're-base'; // mirrors state to FB
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  //apiKey: 'AIzaSyAHnKw63CUBAqSuCREgils_waYJ0qwpGiU',
  //authDomain: 'daniel-deverell-pirates.firebaseapp.com',
  //databaseURL: 'https://temporary-pirates.firebaseio.com/',

  apiKey: "AIzaSyBV5ebAym3wkxPca1y2v-a0nMeezl--Ng4",
  authDomain: "pirates-2a5eb.firebaseapp.com",
  databaseURL: "https://pirates-2a5eb.firebaseio.com",
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
