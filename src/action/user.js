import {findIndex, propEq, update} from 'ramda';

export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_GET = 'USER_GET';

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

export default function userReducer(state = [], action) {
  switch (action.type) {
    case USER_CREATE: {
      return state.concat(action.user)
    }
    case USER_UPDATE: {
      const index = findIndex(propEq('id', action.user.id))(state);
      return update(index, action.user, state)
    }
    case USER_GET: {
      return action.user
    }
    default: {
      return state
    }
  }
}