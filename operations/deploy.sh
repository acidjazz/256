#!/bin/bash

s3cmd --config=/Users/k/.s3cfg sync public/. s3://256.io --exclude '.DS_Store'
s3cmd setacl --config=/Users/k/.s3cfg s3://256.io/ --acl-public --recursive
