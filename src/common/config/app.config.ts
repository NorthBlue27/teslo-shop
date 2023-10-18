/* eslint-disable prettier/prettier */
export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  port: +process.env.PORT,
});
