npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:SuYxh/ironBlog.git master

# cd ../
# rm -rf public
