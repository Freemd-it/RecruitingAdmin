### admin-backend
- 의존성 모듈 설치(Windows)
    - npm을 통하여 한번에 설치
        - `npm install --global --production windows-build-tools`
        - `npm install`
    - 만약 안될경우, 다음과같이 설치[가이드](https://github.com/nodejs/node-gyp)
        1. [Visual Studio Build Tools (using "Visual C++ build tools" workload)](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)
        2. [Python 2.7](https://www.python.org/downloads/) 2.7버전으로 설치해야함
            - `npm config set python python2.7`
            - python을 못찾을경우 개별적으로 환경변수 설정을 해야함.
        3. `npm config set msvs_version 2017`
        4. `npm intall`
- DB Init
    - `npm run init`
