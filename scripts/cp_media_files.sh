#!/bin/bash

cd ../static/
ls
for filename in *.jpeg; do
    aws s3 cp "$filename" s3://$1-$2-lab-media-files/static/"$filename"
done