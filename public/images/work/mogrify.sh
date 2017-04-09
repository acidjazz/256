#!/bin/bash
mkdir thumbnails;
mogrify -format jpg -path thumbnails -thumbnail 20x20 *.jpg
mogrify -format png -path thumbnails -thumbnail 20x20 *.png -alpha transparent
