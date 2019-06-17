import axios from 'axios';

import store from '@/store';
import { getToken } from '$c/token';

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

export const getAllUsers = async () => (await api.get('users')).data.users;

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
  await api.post(
    'user/acceptFriendRequest',
    { id },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );

export const createFriendRequest = async id =>
  await api.post(
    'user/friendRequest',
    { id },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
export const rejectFriend = async id =>
  await api.post(
    'user/rejectFriendRequest',
    { id },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
export const removeFriend = async id => {
  await api.post(
    'user/removeFriend',
    { id },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
export const blockUser = async id =>
  await api.post(
    'user/blockUser',
    { id },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
export const unblockUser = async id =>
  await api.post(
    'user/unblockUser',
    { id },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );

export const createCalendar = (name, colorHex, userId) =>
  api.post('calendar/create', { name, colorHex, userId });

export const deleteCalendar = async id =>
  await api.post('calendar/delete', { id });
export const getCalendars = async () =>
  (await api.get('calendars')).data.calendars;

export const updateCalendar = async (id, name) =>
  await api.post('calendar/update', { id, name, colorHex: '#ffff' });

export const getEvents = async () => (await api.get('events')).data.events;

export const createEvent = async (
  startDate,
  duration,
  reminderBefore,
  repeatsEvery,
  repeatsTo,
  type,
  name,
  colorHex,
  calendarId,
  longitude,
  latitude,
) => {
  await api.post('event/create', {
    startDate,
    duration,
    reminderBefore,
    repeatsEvery,
    repeatsTo,
    type,
    name,
    colorHex,
    calendarId,
    longitude,
    latitude,
  });
};
export const deleteEvent = async id => await api.post('event/delete', { id });
