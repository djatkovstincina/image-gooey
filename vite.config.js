export default async () => {
  const { default: glsl } = await import('vite-plugin-glsl');
  return {
    plugins: [glsl()],
  };
};
