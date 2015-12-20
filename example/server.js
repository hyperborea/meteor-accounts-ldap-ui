if (Meteor.isServer) {
  _.extend(LDAP_SETTINGS, {
    allowedGroups: ['risk', 'example.debug'],

    guestUser: {
      username: 'guest',
      password: 'guest',
      displayName: 'Guest User',
      groups: ['example.debug'],
    }
  });  
}