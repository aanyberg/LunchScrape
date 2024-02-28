#!/bin/bash
echo "JOB STARTED - FETCHING MENU DATA:"  # Log message to indicate the script has started

cd /backend

# Path to Python executable had to be used otherwise the script would not run
exec /usr/local/bin/python3 fetch_menu_data.py >> /var/log/cron.log 2>&1
