# site
- https://reactnative.dev
- https://github.com/Microsoft/react-native-macos

- cocoapods
- https://zeddios.tistory.com/25
- https://cocoapods.org/

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

