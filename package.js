Package.describe({
  name: 'klarna:accounts-ldap-ui',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('reactive-var');

  api.use('kadira:flow-router');
  api.use('kadira:blaze-layout');
  api.use('klarna:accounts-ldap');

  api.addFiles(['lib/client.html', 'lib/client.js'], 'client');
  api.addFiles('lib/routes.js', 'client');
});