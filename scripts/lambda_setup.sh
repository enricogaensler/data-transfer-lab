#!/bin/bash

cd ../lambda_docker/

sudo yum -y install jq 
export EBS_URL=$(aws elasticbeanstalk describe-environments --environment-names dm-lab | jq -r '.Environments[0] .EndpointURL')

aws ecr create-repository --repository-name ecr-repository --region $2
docker build -t $1.lambda-image .

docker tag $1.lambda-image:latest $1.dkr.ecr.$2.amazonaws.com/ecr-repository:latest

aws ecr get-login-password --region $2 | docker login --username AWS --password-stdin $1.dkr.ecr.$2.amazonaws.com

docker push $1.dkr.ecr.$2.amazonaws.com/ecr-repository:latest

aws lambda create-function --function-name selenium-lambda \
    --package-type Image \
    --timeout 300 \
    --memory-size 1024 \
    --code ImageUri=$1.dkr.ecr.$2.amazonaws.com/ecr-repository:latest \
    --role arn:aws:iam::$1:role/dm-lab-$2-AWSLambdaSeleniumExecutionRole \
    --environment Variables={EBS_URL=$EBS_URL} \
    