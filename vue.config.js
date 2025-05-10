module.exports = {
  publicPath: '/linuxsystemshop/', // حتماً با نام ریپازیتوری شما مطابقت داشته باشد
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  productionSourceMap: false, // برای کاهش حجم فایل‌های تولید شده

  // تنظیمات مهم برای Vue 2
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 250000
      }
    }
  },

  // اگر از vue-router استفاده می‌کنید
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].meta = {
        viewport: 'width=device-width,initial-scale=1.0'
      };
      args[0].title = 'Linux System Shop'; // عنوان پروژه شما
      return args;
    });
  },

  // رفع مشکلات رایج در Vue 2
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/variables.scss";` // اگر از SCSS استفاده می‌کنید
      }
    }
  }
};