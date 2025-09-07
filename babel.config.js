export default function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      // Keep this last if you add Reanimated:
      // "react-native-reanimated/plugin",
    ],
  };
};
