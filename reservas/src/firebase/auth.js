import { auth } from './firebase';

/**
 * Create user with email and password in ther firebase auth
 *
 * email {string} - user's email.
 * password {string} - users' password.
 */
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);


/**
 * Signs in a user with email and password
 *
 * email {string} - user's email.
 * password {string} - users' password.
 */
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);


/**
 * Signs out a user
 */
export const doSignOut = () =>
  auth.signOut();

/**
 * Reset users password
 */
export const doPasswordReset = email =>
  auth.sendPasswordResetEmail(email);


/**
 * Changes user passwords
 */
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
