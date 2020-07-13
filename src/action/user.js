import {findIndex, propEq, update} from 'ramda';

export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_GET = 'USER_GET';
export const USER_AUTH = 'USER_AUTH';
export const USER_VERIFY = 'USER_VERIFY';

export function userCreateAction(user) {
  return {
    type: USER_CREATE,
    user: user,
  }
}

export function userUpdateAction(user) {
  return {
    type: USER_UPDATE,
    user: user,
  }
}

export function userGetAction(user) {
  return {
    type: USER_GET,
    user: user,
  }
}

export function userAuthAction(user) {
  return {
    type: USER_AUTH,
    user: user,
  }
}

export function userVerifyAction(result) {
  return {
    type: USER_VERIFY,
    verified: result,
  }
}

export default function userReducer(state = [], action) {
  switch (action.type) {
    case USER_CREATE: {
      return state.concat(action.user)
    }
    case USER_UPDATE: {
      const index = findIndex(propEq('email', action.user.email))(state);
      return update(index, action.user, state)
    }
    case USER_GET: {
      return action.user
    }
    case USER_AUTH: {
      return action.user
    }
    case USER_VERIFY: {
      return action.verified
    }
    default: {
      return state
    }
  }
}