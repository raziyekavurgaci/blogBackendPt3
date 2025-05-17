export const jwt = {
  secret: process.env.JWT_SECRET,
  expiresIn: "15m",
  refreshTokenExpiresIn: "30d",
};
