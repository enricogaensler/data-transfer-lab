#!/bin/bash

cd ../data/

aws s3 cp cur-data-december.parquet s3://$1-$2-cur-data/cur-hourly/year=2022/month=12/cur-data-december.parquet 
aws s3 cp dog-booking-data.csv s3://$1-$2-dog-bookings/year=2022/month=12/dog_booking_data.csv 
