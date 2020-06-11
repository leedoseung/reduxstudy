import { createSelector } from "reselect";

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => friends.filter((friend) => friend.age <= ageLimit)
);

export const getFriendWithShowLimit = createSelector(
  [getFriends, getShowLimit],
  (friends, showLimit) => friends.slice(0, showLimit)
);
