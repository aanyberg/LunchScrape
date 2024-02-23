# Use Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy backend files
COPY app app

# Expose port
EXPOSE 8000

# Command to run the backend server
CMD ["uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "8000"]
