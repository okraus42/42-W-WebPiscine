#!/bin/bash
if [ $# -eq 0 ]
	then
		echo >&2 "No arguments supplied"
else
	for var in "$@"
	do
		mkdir ex"$var"
	done
fi
