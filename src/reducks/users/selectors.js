import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;

export const getSignedIn = createSelector(
  [usersSelector], 
  state => state.isSignedIn
)

export const getUserId = createSelector(
  [usersSelector], 
  state => state.uid
)

export const getUserName = createSelector(
  [usersSelector], 
  state => state.name
)

export const getUserEmail = createSelector(
  [usersSelector], 
  state => state.email
)

export const getUserPhotoURL = createSelector(
  [usersSelector], 
  state => state.photoURL
)