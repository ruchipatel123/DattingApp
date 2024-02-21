import create from 'zustand';
import { devtools } from 'zustand/middleware';
const store = (set, get) => ({
  users: null,
  userDetails: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
  },
  saveCotactSuccess: false,
  errors: {
    firstNameError: null,
    lastNameError: null,
    emailAddressError: null,
    phoneNumberError: null,
  },
  processed: false,
  processing: false,
  setUsers: async (users = null) => {
    await set(() => ({ users: users }));
  },
  setProcessing: async (processing = false) => {
    await set(() => ({ processing: processing }));
  },
  setProcessed: async (processed = false) => {
    await set(() => ({ processed: processed }));
  },
  setFirstName: async (firstName = '') => {
    await set((state) => ({ userDetails: { ...state.userDetails, firstName: firstName } }));
    await get()?.checkFirstName();
  },
  setLastName: async (lastName = '') => {
    await set((state) => ({ userDetails: { ...state.userDetails, lastName: lastName } }));
    await get()?.checkLastName();
  },
  setEmailAddress: async (emailAddress = '') => {
    await set((state) => ({
      userDetails: { ...state.userDetails, emailAddress: emailAddress },
    }));
    await get()?.checkEmailAddress();
  },
  setPhoneNumber: async (phoneNumber = '') => {
    await set((state) => ({ userDetails: { ...state.userDetails, phoneNumber: phoneNumber } }));
    await get()?.checkPhoneNumber();
  },
  checkFirstName: async () => {
    if (get()?.userDetails?.firstName == '') {
      await set((state) => ({
        errors: { ...state.errors, firstNameError: 'Please enter name.' },
      }));
    } else {
      await set((state) => ({ errors: { ...state.errors, firstNameError: null } }));
    }
  },
  checkLastName: async () => {
    if (get()?.userDetails?.lastName == '') {
      await set((state) => ({
        errors: { ...state.errors, lastNameError: 'Please enter surname.' },
      }));
    } else {
      await set((state) => ({ errors: { ...state.errors, lastNameError: null } }));
    }
  },
  checkEmailAddress: async () => {
    if (get()?.userDetails?.emailAddress == '') {
      await set((state) => ({
        errors: { ...state.errors, emailAddressError: 'Please enter email address.' },
      }));
    } else if (
      get()?.userDetails?.emailAddress != '' &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(get()?.userDetails?.emailAddress)
    ) {
      await set((state) => ({
        errors: { ...state.errors, emailAddressError: 'Please enter valid email address.' },
      }));
    } else {
      await set((state) => ({ errors: { ...state.errors, emailAddressError: null } }));
    }
  },
  checkPhoneNumber: async () => {
    if (get()?.userDetails?.phoneNumber == '' || !get()?.userDetails?.phoneNumber) {
      await set((state) => ({
        errors: { ...state.errors, phoneNumberError: 'Please enter phone number.' },
      }));
    } else if (
      get()?.userDetails?.phoneNumber != '' &&
      !/^[0-9()+-]+$/i.test(get()?.userDetails?.phoneNumber)
    ) {
      await set((state) => ({
        errors: { ...state.errors, phoneNumberError: 'Please enter valid phone number.' },
      }));
    } else {
      await set((state) => ({ errors: { ...state.errors, phoneNumberError: null } }));
    }
  },
  validateForm: async () => {
    await get()?.checkFirstName();
    await get()?.checkLastName();
    await get()?.checkEmailAddress();
    await get()?.checkPhoneNumber();
    return (
      get()?.errors?.firstNameError == null &&
      get()?.errors?.lastNameError == null &&
      get()?.errors?.emailAddressError == null &&
      get()?.errors?.phoneNumberError == null
    );
  },
  resetForm: async () => {
    await set(() => ({
      errors: {
        firstNameError: null,
        lastNameError: null,
        emailAddressError: null,
        phoneNumberError: null,
      },
      userDetails: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
      },
    }));
  },
  setSaveContactSuccess: async (saveCotactSuccess = false) => {
    await set(() => ({ saveCotactSuccess: saveCotactSuccess }));
  },
});

export const UserStore = create(devtools(store));
