import { db } from './firebase';

export const doCreateUser = (userid, username, email) =>
  db.collection('users').add({ userid, username, email });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getActivities = () =>
  db.collection('activities').get();
