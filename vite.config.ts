import vue from '@vitejs/plugin-vue'

// 如需获取类型提示，可本地安装vite 引用 defineConfig
// https://vitejs.dev/config/
export default {
  server: {
    host: true
  },
  plugins: [vue()]
}
