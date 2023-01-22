export const selectContacts = state => state.myContacts.contacts.items;

export const selectFilter = state => state.myContacts.filter;

export const selectError = state => state.myContacts.contacts.error;

export const selectStatusLoading = state => state.myContacts.contacts.isLoading;
