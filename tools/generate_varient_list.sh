#! /bin/sh
logfile=${1:-"logs/latest.log"}
sed -n 's/.*{\(.*\)} is variant of Block{\(.*\)}.*/["\1", "\2"],/p' "${logfile}" | sort | uniq
