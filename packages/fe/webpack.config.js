const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: path.resolve(__dirname,'src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.js', '.json']
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.tsx$/,
                use:[
                    {
                        loader:'ts-loader',
                    },
                ],
                include:[path.resolve(__dirname,'./src')]
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins:[
        new HtmlWebpackPlugin({
            templete:path.resolve(__dirname,'./index.html')
        }),
    ]
}