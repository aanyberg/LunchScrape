# Use a Python base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install cron and any dependencies needed for the web scraping script
RUN apt-get update \
    && apt-get install -y --no-install-recommends cron \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the entire scraper directory into the container
COPY scraper /app/scraper

# Set the entry point for the container
CMD ["cron", "-f"]
