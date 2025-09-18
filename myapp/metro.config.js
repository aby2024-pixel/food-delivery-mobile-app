// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Start from Expo's default config (this is what “extend expo/metro-config” means)
const config = getDefaultConfig(__dirname);

// Export the NativeWind-wrapped config
module.exports = withNativeWind(config, { input: "./global.css" });