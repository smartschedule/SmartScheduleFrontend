import axios from 'axios';

import store from '@/store';
import { getToken } from '$c/token';

const token = getToken();

const api = axios.create({
  baseURL: 'http://13.80.110.174:80/api/',
});

export const updateToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
updateToken(getToken());
export const login = (email, password) =>
  api.post('login', { email, password });
export const register = (userName, email, password) =>
  api.post('register', { userName, email, password });

export const getUserDetails = async () => (await api.get('user/details')).data;

export const getCalendars = () => api.get('getCalendars');
export const getFriendsList = async () =>
  (await api.get('user/getFriendsList')).data.users;
export const getCurrentUsersFriendRequests = async () =>
  (await api.get('user/getUsersFriendRequests')).data.users;
export const getPendingUserFriendRequests = async () =>
  (await api.get('user/getPendingUserFriendRequests')).data.users;
export const getBlockedUsers = async () =>
  (await api.get('user/getBlockedUsers')).data.users;

//friends

export const acceptFriend = async id =>
  await api.post('user/acceptFriendRequest', id, {
    headers: { 'Content-Type': 'application/json' },
  });

export const createFriendRequest = async id =>
  await api.post('user/friendRequest', id);
export const rejectFriend = async id =>
  await api.post('user/rejectFriendRequest', id);
export const removeFriend = async id => {
  console.log(id);
  await api.post('user/removeFriend', id, {
    headers: { 'Content-Type': 'application/json' },
  });
};
export const blockUser = async id => (await api.post('user/blockUser'), id);
export const unblockUser = async id => (await api.post('user/unblockUser'), id);
export const getEvents = calendarId => api.get('getEvents', { calendarId });
export const deleteEvent = id => api.delete('deleteEvent', { id });
