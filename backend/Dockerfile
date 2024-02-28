FROM python:3.9-slim

WORKDIR /backend

COPY requirements.txt .

# Install dependencies
RUN apt-get update && apt-get install -y cron && pip install -r requirements.txt

# Copy backend files
COPY app app

COPY scraper_script.sh /etc/cron.hourly/scraper_script.sh

COPY entrypoint.sh /backend/entrypoint.sh

ADD crontab /etc/cron.d/scraper_script

RUN chmod +x /backend/entrypoint.sh

RUN chmod 0644 /etc/cron.d/scraper_script

RUN crontab /etc/cron.d/scraper_script

RUN touch /var/log/cron.log

RUN chmod +x /etc/cron.hourly/scraper_script.sh

EXPOSE 8000
