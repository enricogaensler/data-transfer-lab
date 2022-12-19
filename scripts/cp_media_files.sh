#!/bin/bash

cd ../static/
ls
for filename in *.png; do
    aws s3 cp "$filename" s3://lab-media-files/static/"$filename"
done