#!/bin/bash
if [ -z $1 ]
then
    echo >&2 "No arguments supplied"
fi
if [ ! -z $1 ]
then
    echo $1
fi
if [ ! -z $2 ]
  then
    echo $2
fi
if [ ! -z $3 ]
  then
    echo $3
fi
