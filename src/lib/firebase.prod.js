import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyBeNaFvshl1WVrOXgssUHkr9CIvqv0jDoo",
	authDomain: "netflix-clone-5a705.firebaseapp.com",
	projectId: "netflix-clone-5a705",
	storageBucket: "netflix-clone-5a705.appspot.com",
	messagingSenderId: "23196774879",
	appId: "1:23196774879:web:e6762e749a13933478946a",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
