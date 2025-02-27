import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBREyw04FxgzabnZQUo17wAxjhwDTizxJA",
  authDomain: "nitroquest-26241.firebaseapp.com",
  projectId: "nitroquest-26241",
  messagingSenderId: "942524960547",
  appId: "1:942524960547:web:711fb7f94de049b5754696"
};

console.log('Initializing Firebase with config:', { ...firebaseConfig, apiKey: '[REDACTED]' });

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function registerWithEmail(email: string, password: string) {
  console.log('Attempting to register with email:', email);
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Registration successful for user:', result.user.uid);
    return {
      uid: result.user.uid,
      username: email.split('@')[0] || 'Anonymous',
    };
  } catch (error: any) {
    console.error("Registration error:", error.code, error.message);
    let message = "Registration failed";
    if (error.code === 'auth/email-already-in-use') {
      message = "Email already registered. Please login instead.";
    } else if (error.code === 'auth/weak-password') {
      message = "Password is too weak. Please use a stronger password.";
    } else if (error.code === 'auth/invalid-email') {
      message = "Invalid email address.";
    }
    throw new Error(message);
  }
}

export async function loginWithEmail(email: string, password: string) {
  console.log('Attempting to login with email:', email);
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful for user:', result.user.uid);
    return {
      uid: result.user.uid,
      username: email.split('@')[0] || 'Anonymous',
    };
  } catch (error: any) {
    console.error("Login error:", error.code, error.message);
    let message = "Login failed";
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      message = "Invalid email or password";
    } else if (error.code === 'auth/too-many-requests') {
      message = "Too many failed attempts. Please try again later.";
    }
    throw new Error(message);
  }
}

export { auth };