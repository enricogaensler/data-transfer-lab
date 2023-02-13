#! /bin/bash

cd ../vue_js
npm i
npm run build

mv dist/ ../express_server
ls
cd ../express_server/; zip ../express-server.zip -r .* -x "../*"
cd ..
ls

aws s3 mv express-server.zip s3://$1-$2-eb-node-express-version/express_server.zip

aws elasticbeanstalk create-application-version --application-name vpc-stack --version-label $3 --description TestAppAwsCli --source-bundle S3Bucket="$1-$2-eb-node-express-version",S3Key="express_server.zip"