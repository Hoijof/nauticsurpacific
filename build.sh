git stash
git pull origin master
npm run build

rm -rf /var/www/nauticsurpacific.com
mkdir /var/www/nauticsurpacific.com
cp -r ./build/. /var/www/nauticsurpacific.com