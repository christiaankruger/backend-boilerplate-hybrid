export const fromEnv = (key: string): string => {
  const candidate = process.env[key];
  if (!candidate) {
    throw new Error(`Missing env variable: '${key}'.`);
  }
  return candidate;
};
