module.exports = {
  "test-runner": "mocha",
  "runner-config": "e2e/.mocharc.json",
  "behavior": {
    "init": {
      "exposeGlobals": process.env.DETOX_EXPOSE_GLOBALS === '0' ? false : true,
    },
  },
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/SampleApp.app",
      "build": "export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/SampleApp.xcworkspace -UseNewBuildSystem=NO -scheme SampleApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 11"
      }
    },
  }
};
