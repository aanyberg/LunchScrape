#!/bin/bash
echo "Running cron"
cron -f &
echo "Tailing log"
tail -f /var/log/cron.log
