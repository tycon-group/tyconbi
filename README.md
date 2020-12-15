# tyconbi
electron-vue 是 vue-cli2.0的版本，该版本为vue3+vue-cli-plugin-electron-builder。

## Command,[HELP](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/recipes.html#debugging-with-vscode)
1. 测试运行
    > yarn electron:serve
    
2. 构建图标，需要将方形图标放置为 [public/icon.png](public/icon.png)
    > yarn electron:generate-icons
   
3. 构建应用，文件导出到 [dist_electron](/dist_electron)
    构建本平台应用
    > yarn electron:build
                       
    构建其他平台应用
    > yarn electron:build --linux deb --win nsis
    
4. 发布到Github，需要先获取[GitHub个人访问令牌](https://github.com/settings/tokens)
    Linux/Mac: 
    > export GH_TOKEN=TOKEN-GOES-HERE
                                              
    Windows: 
    > set GH_TOKEN=TOKEN-GOES-HERE
    



