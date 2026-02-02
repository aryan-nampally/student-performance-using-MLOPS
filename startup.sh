#!/bin/sh
# Startup script for Azure App Service (Linux)
# Use a single worker to avoid startup/memory stalls for ML models
exec gunicorn app:app --workers 1 --bind 0.0.0.0:8000 --timeout 180
