echo "Running cron and tailing logs"
cron
tail -f /var/log/cron.log
