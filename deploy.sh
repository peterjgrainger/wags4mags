rm -fr dist
mkdir dist
cp *.html *.js *.png *.jpeg *.jpg *.ico *.txt dist/
cd dist
aws s3 sync . s3://wags4mags.com --delete
aws cloudfront create-invalidation --distribution-id ELFTL68BPNAUB --paths "/*"