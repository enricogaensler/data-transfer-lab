#!/bin/bash

export AWSACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export AWSREGION=$(aws configure get region)

cd ../vue_js
npm i
npm run build

mv dist/ ../express_server
ls
cd ../express_server/
sed -i "s/ACCOUNT_ID_PLACEHOLDER/$AWSACCOUNT/g" .ebextensions/options.config
sed -i "s/REGION_PLACEHOLDER/$AWSREGION/g" .ebextensions/options.config
zip ../express-server.zip -r .* -x "../*"
cd ..
ls

aws s3 mv express-server.zip s3://$AWSACCOUNT-$AWSREGION-eb-node-express-version/express_server.zip

aws elasticbeanstalk create-application-version --application-name dm-lab \
    --version-label $1 \
    --description TestAppAwsCli \
    --source-bundle S3Bucket="$AWSACCOUNT-$AWSREGION-eb-node-express-version",S3Key="express_server.zip" \