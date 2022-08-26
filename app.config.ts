import "dotenv/config";

export default {
  expo: {
    name: "SplitR",
    slug: "splitr-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleidentifier: "com.exponents.splitr",
      googleServicesFile: "./GoogleService-Info.plist"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.exponents.splitr",
      googleServicesFile: "./google-services.json"
    },
    web: {
      favicon: "./assets/images/favicon.png"
    },
    extra: {
      eas: {
        projectId: "a53cbd42-2aa6-497b-a730-b43cf87d410a"
      },
      webClientId: process.env.WEB_CLIENT_ID,
      apiEndpoint: process.env.API_ENDPOINT
    },
    plugins: ["@react-native-google-signin/google-signin"]
  }
};
