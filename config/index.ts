import dev from './dev'
import prod from './prod'
import * as path from 'path'
const config = {
  projectName: 'taro-ycomponent',
  date: '2020-12-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    ['taro-plugin-copy-component', {
      componentsPath: path.resolve(__dirname, '../node_modules/taro-yui-vue/src/components')
    }]
  ],
  defineConstants: {
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          mediaQuery:false,
          onePxTransform:false
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    router: {
      mode: "browser"
    },
    devServer: {
      port: 10086
    },
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          mediaQuery:true,
          onePxTransform:false
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge: Function) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, dev)
  }
  return merge({}, config, prod)
}
