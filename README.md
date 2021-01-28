# ReactNativeShowOff

##### About

This project is showoff for interviews to represent my skills.
If you had any problems setting anything up or you just had some questions, please reach me out on vsleichert@gmail.com or use Issues.

Also feel free to use this codebase in any desired way.

There could be tons of more functionality for better user experience. Maybe will be done in the future.

![](https://i.imgur.com/r6SCfTY.gif)

##### Running it on ios

 - `npm install`
 - `cd ios`
 - `pod install`
 - `cd ..`
 - `npm run ios`


##### Running it on android

 - `npm install`
 - `npm run android`
##### Issues

- There is couple warnings popping up, they are from packages used. Could be solved using different packages or writing your own.
- Not optimised for landscape mode, therefor its turned off

##### Automation testing

 - `cd test_appium`
 - `npm install`
 - then open the `wdio.conf.js` and in capabilities set credentials for your device 
    - app: Path to .app file for simulator
    - deviceName: Name of your iphone simulator
    - platformVersion: Version of your iphone simulator
 - when you have all of that done, go back to the root folder `cd ..`
 - `npm run automation-test`

Unfortunately I was not able to set up mocking API, so the test 'work', but are practicly useless since it relays on real data.