#!/bin/bash

cd ../data/

aws s3 cp cur-data-december.csv s3://$1-$2-cur-data/cur-hourly/year=2022/cur-data-december.csv 
aws s3 cp cur-data-december.parquet s3://$1-$2-cur-data/cur-hourly/year=2022/cur-data-december.parquet 
aws s3 cp dog-booking-data.csv s3://$1-$2-dog-bookings/december/dog_booking_data.csv 
