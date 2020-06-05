import {findIndex, propEq, update} from 'ramda';

export const RSS_CREATE = 'RSS_CREATE';
export const RSS_UPDATE = 'RSS_UPDATE';
export const RSS_GET = 'RSS_GET';

export function rssCreateAction(rss) {
  return {
    type: RSS_CREATE,
    rss: rss,
  }
}

export function rssUpdateAction(rss) {
  return {
    type: RSS_UPDATE,
    rss: rss,
  }
}

export function rssGetAction(rss) {
  return {
    type: RSS_GET,
    rss: rss,
  }
}

export default function userReducer(state = [], action) {
  switch (action.type) {
    case RSS_CREATE: {
      return state.concat(action.rss)
    }
    case RSS_UPDATE: {
      const index = findIndex(propEq('id', action.rss.id))(state);
      return update(index, action.rss, state)
    }
    case RSS_GET: {
      return action.rss
    }
    default: {
      return state
    }
  }
}