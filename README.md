### typescript


* 초기  
$ npm init -y
package.json 파일 생성

* tsconfig.json
** strict : 모든 타입 체킹 옵션을 활성화 한다
** esModuleInterop :  commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해준다
** outDir : 컴파일된 파일들이 저장되는 경로를 지정

* 컴파일  
$ tsc

* 실행  
$ node dist/practice3.js



