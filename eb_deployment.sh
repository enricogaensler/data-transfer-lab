#! /bin/bash

cd ./vue_js
npm i
npm run build

mv dist/ ../express_server
ls
cd ../express_server/; zip -r ../express-server.zip *
cd ..
ls

aws s3 mv express-server.zip s3://eb-node-express-version/express_server.zip

aws elasticbeanstalk create-application-version --application-name vpc-test-stack --version-label v2 --description TestAppAwsCli --source-bundle S3Bucket="eb-node-express-version",S3Key="express_server.zip"