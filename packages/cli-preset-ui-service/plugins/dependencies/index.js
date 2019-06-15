'use strict';

module.exports = ({ api, env }) => {
  const { CLI_ENV } = env;

  api.add(async ({ installDependencies, linkDependencies }) => {
    await installDependencies([
      'cross-env',
      'dotenv',
      'express',
      'nodemon',
      'react',
      'react-dom',
      'react-hot-loader',
      'prop-types',
    ]);

    const localInstaller =
      CLI_ENV === 'development' ? linkDependencies : installDependencies;

    await localInstaller(['@carbon/server']);
  });
};
