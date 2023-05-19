# AWS WAF Sustainability: Data Transfer Lab

This repository contains important data and application code to run the the lab *WA Sustainability Lab: Data Movement* which can be found in workshop studio. 

The workshop is about optimizing AWS architectures for sustainability. This lab focusses on minimizing data movement across networks according to the best practices  in the AWS Well Architected Framework to gain more resource efficiency. This lab enables customers to explore and measure the data movement of applications. It provides instructions for different services that can serve as a data source for data movement metrics, and how to make use of them. Customers will learn what information to extract and how to interpret it through sustainability proxy metrics. Proxy metrics help customers  to quantify the effect of the changes on the data movement.

The repository contains all the files that customers will need in this lab. In the directory called scripts are some bash scripts located to simplify the setup process of this lab. The directories express_server and vue_js contain code for the application of Office Dog Leasing which customers will use as an example application at a later stage.This application will be deployed with AWS Elastic Beanstalk. For this application some static files used for a webpage are stored in the directory static. The code directory called lambda_docker is used to build an AWS Lambda function which will simulate customers requests which are needed to run the lab.

## Example Application (express_server/ & vue_js/)
The example application consists of an express server and a vuejs frontend. The files of the vuejs directory will be included into the directory of the express server and served statically. The vuejs application will make requests to the express server, which will fetch data from an S3 bucket. To deploy the application it will be zipped during setup and will then by the user be deployed on AWS Elastic Beanstalk. 

## Scripts (scripts/)
For the setup process, the *scripts/* directory provides several scripts. The script *setup.sh* will run all the other scripts with the necessary parameters. The scripts called *cp_datasets.sh* and *cp_media_files.sh* copy data needed for the lab to Amazon S3 Buckets. The script *eb_deployment.sh* puts together the files needed for the example application, zips it, uploads it to S3 and creates a application version for AWS Elastic Beanstalk. The script *lambda_setup.sh* creates an Amazon ECR repository, builds a docker image, pushes it to ECR and creates a lambda function from the image in ECR. 

## Static & Data (static/ & data/)
The directory *static/* contains images for the website of the example application. The directory *data/* contains data that will be needed in the lab. 