const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path"); // 노드에서 경로를 찾도록 도와줌

module.exports = {
  mode: "development", // 개발모드 설정
  devtool: "eval",
  resolve: {
    extensions: [".js", ".vue"], // 생략 가능한 확장자 목록
  },
  entry: {
    app: path.join(__dirname, "main.js"), //나중에 하나로 합쳐질 파일의 이름
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 파일명이 .vue로 끝나는 정규표현식
        loader: "vue-loader", // vue 파일을 만났을 때는 vue로더가 처리해, template문법 처리할 수 있게 만듦
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"), // dist라는 폴더가 생기고 app.js 가 최종결과물로 나올것이다.
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true, // 브라우저를 자동으로 열도록 설정
    // 나머지 필요한 설정을 여기에 추가
  },
};
