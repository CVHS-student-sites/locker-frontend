import { writable } from 'svelte/store';

// view the page will be on
export const pageView = writable(0);

//stores locker location that was selected in the selection component
export const selectedLocation = writable({});

export const registrationData = writable({});
export const studentId1 = writable();
export const studentId2 = writable();
export const singleLocker = writable(false);