# Use Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /backend

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN apt-get update && apt-get install -y cron && pip install -r requirements.txt

# Copy backend files
COPY app app

# Copy the update script from the backend directory to the container
COPY scraper_script.sh /etc/cron.hourly/scraper_script.sh

# Give execution permissions to the script
RUN chmod +x /etc/cron.hourly/scraper_script.sh

# Expose port
EXPOSE 8000

# Command to run the backend server
CMD ["uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "8000"]
