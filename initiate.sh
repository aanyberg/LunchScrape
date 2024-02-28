#!/bin/bash
echo "Running Docker Compose"
docker compose up -d --no-deps --build
echo "Everything finished"