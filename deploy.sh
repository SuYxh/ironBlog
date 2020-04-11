#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
 echo 'vp.ironc.cn' > CNAME


git init
git config user.name "SuYxh"
git config user.email "1806328384@qq.com"
git add -A
git commit -m 'deploy-github'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:SuYxh/SuYxh.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:SuYxh/ironBlog.git master:gh-pages


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@dadifeihong:dadifeihong/dadifeihong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@vuepress:ironc/VuePress.git master

    