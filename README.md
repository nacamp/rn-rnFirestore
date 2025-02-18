# 이번 프로젝트 주의사항
```
스마트폰에서 없는 기능은 생각하지 말자.
```

# library 추가
```
npm install react-native-tab-view
npm install react-native-gesture-handler react-native-reanimated react-native-draggable

cd macos && pod install

```


# site

- etc
- https://reactnative.dev/docs/typescript

flex
- https://reactnative.dev/docs/flexbox
- https://studiomeal.com/archives/197

color
- https://www.w3.org/TR/css-color-3/#svg-color
- https://reactnative.dev/docs/colors

- samples
- https://github.com/ReactNativeNews/React-Native-Apps
- https://reactnative.directory/popular

- https://reactnative.dev
- https://github.com/Microsoft/react-native-macos
- https://microsoft.github.io/react-native-windows/docs/rnm-getting-started

- cocoapods
- https://zeddios.tistory.com/25
- https://cocoapods.org/

# 디버깅
```bash
brew install --cask react-native-debugger
```
디버깅
https://learn.microsoft.com/ko-kr/windows/dev-environment/javascript/react-native-for-windows


React Native Tools 설치후 디버깅
```
An error occurred while launching the application. Cannot find module '/Users/jimmy/src/react/rnFirestore/node_modules/@react-native-community/cli-platform-ios/build/config/findXcodeProject'
Require stack:
- /Users/jimmy/.vscode/extensions/msjsdiag.vscode-react-native-1.13.0/dist/rn-extension.js
- /Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/api/node/extensionHostProcess.js (error code 303)
```

# 실행
```bash
# 두개의 창에서 
cd ~/src/react/rnFirestore
npx react-native start 
npx react-native run-macos
watchman watch-list
```

# xcode
``` bash
cd ~/src/react/rnFirestore/macos
open rnFirestore.xcworkspace 

# 배포 빌드
Product -> Archive
# 빌드된 app 추출
Window->Organizer
Distribute app -> custom ->  copy app
# 설정: 실행, 빌드, 아카이브
Product -> Scheme -> Edit Scheme
```

# 프로젝트 생성
```bash
npm view react-native@0.75.x version
npx @react-native-community/cli init rnFirestore --version 0.75.5
cd rnFirestore
npx react-native-macos-init
# 0.75.5은 아래 작업필요 없음
cd macos
pod install
```
참고 0.76 버젼을 설치하니 TextInput에서 crash 발생


# 파일변경 감지
```bash
brew install watchman
```

# Package Manager
ruby -v 이 3.1 이상이 아니면
```bash
brew install ruby
brew --prefix ruby
echo 'export PATH=/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

cocoapods
```bash
sudo gem install cocoapods
sudo gem update --system 3.6.3
pod --version
1.16.2
```

