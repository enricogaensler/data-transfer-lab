cd ../lambda_docker/

sudo yum install jq -y
export AWSACCOUNT=$(aws sts get-caller-identity | jq -r '.Account')

aws ecr create-repository --repository-name ecr-repository --region us-east-1
docker build -t $AWSACCOUNT.lambda-image .

docker tag $AWSACCOUNT.lambda-image:latest $AWSACCOUNT.dkr.ecr.us-east-1.amazonaws.com/ecr-repository:latest

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $AWSACCOUNT.dkr.ecr.us-east-1.amazonaws.com

docker push $AWSACCOUNT.dkr.ecr.us-east-1.amazonaws.com/ecr-repository:latest

aws lambda create-function --function-name selenium-lambda --package-type Image --timeout 300 --memory-size 1024 --code ImageUri=$AWSACCOUNT.dkr.ecr.us-east-1.amazonaws.com/ecr-repository:latest --role arn:aws:iam::$AWSACCOUNT:role/vpc-stack-us-east-1-AWSLambdaSeleniumExecutionRole