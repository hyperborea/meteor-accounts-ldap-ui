Package.describe({
  name: 'hyperborea:accounts-ldap-ui',
  version: '0.0.1',
  summary: 'Adds a graphical interface to hyperborea:accounts-ldap, uses semantic-ui.',
  git: '',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript@0.4.0');
  api.use('templating');
  api.use('reactive-var');

  api.use('kadira:flow-router@2.0.0');
  api.use('kadira:blaze-layout@2.0.0');
  api.use('hyperborea:accounts-ldap@1.0.0');

  api.addFiles(['lib/client.html', 'lib/client.js'], 'client');
  api.addFiles('lib/routes.js', 'client');
});