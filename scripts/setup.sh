#!/bin/bash

export AWSACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export AWSREGION=$(aws configure get region)

chmod +x ./cp_datasets.sh
./cp_datasets.sh $AWSACCOUNT $AWSREGION 

chmod +x ./cp_media_files.sh
./cp_media_files.sh $AWSACCOUNT $AWSREGION 

chmod +x ./eb_deployment.sh
./eb_deployment.sh v1

chmod +x ./lambda_setup.sh
./lambda_setup.sh $AWSACCOUNT $AWSREGION

aws s3api put-bucket-ownership-controls --bucket elasticbeanstalk-$AWSREGION-$AWSACCOUNT --ownership-controls Rules=[{ObjectOwnership=BucketOwnerPreferred}]