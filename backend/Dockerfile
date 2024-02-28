FROM python:3.9-slim

WORKDIR /backend

COPY requirements.txt .

# Install dependencies
RUN apt-get update && \ 
    apt-get install -y cron && \ 
    pip install -r requirements.txt

# Copy backend files
COPY app app

COPY scraper_script.sh /etc/cron.d/scraper_script.sh

COPY entrypoint.sh /backend/entrypoint.sh

COPY crontab /etc/cron.d/crontab

RUN touch /var/log/cron.log && \ 
    chmod +x /backend/entrypoint.sh && \ 
    chmod +x /etc/cron.d/scraper_script.sh && \
    chmod 0644 /etc/cron.d/crontab

EXPOSE 8000
