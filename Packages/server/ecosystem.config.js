module.exportes = {
  apps: [
    {
      name: 'TaskThread',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
