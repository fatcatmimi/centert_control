{
    // app: ["babel-polyfill", "./src/main.js"],
    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                ]
            }
        ]
    }
}