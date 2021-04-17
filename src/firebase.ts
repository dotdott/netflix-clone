import firebase from 'firebase/app';
import 'firebase/auth';

const app = !firebase.apps.length ? firebase.initializeApp({
    apiKey: "AIzaSyCI0Pc4mer3mTPuLdnrb09ITOXN_iVPFdE",
    authDomain: "netflix-auth-491dd.firebaseapp.com",
    projectId: "netflix-auth-491dd",
    storageBucket: "netflix-auth-491dd.appspot.com",
    messagingSenderId: "564601560552",
    appId: "1:564601560552:web:4676ad34f36fce04a8d85d"
}) : firebase.app();

export const auth = app.auth();
export default app;

