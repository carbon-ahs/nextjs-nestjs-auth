import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

// export default registerAs(
//   'jwt',
//   (): JwtModuleOptions => ({
//     secret: process.env.JWT_SECRET,
//     signOptions: {
//       expiresIn: process.env.JWT_EXPIRES_IN,
//     },
//   }),
// );

export default registerAs('jwt', (): JwtModuleOptions => {
  console.log(
    '[jwt.config] JWT_SECRET exists:',
    Boolean(process.env.JWT_SECRET),
  );

  return {
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  };
});
