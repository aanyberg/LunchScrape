#!/bin/sh
echo "Cron job started"  # Output will be logged
python update_data.py >> /var/log/update_data.log 2>&1

# Change directory to where your Python script is located
cd /backend

# Run your Python web scraping script
python3 fetch_menu_data.py
