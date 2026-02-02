#!/bin/sh
# Startup script for Azure App Service (Linux)
# Use a single worker to avoid startup/memory stalls for ML models
# Bind to $PORT if provided by the host, otherwise default to 8000
exec gunicorn app:app --workers 1 --bind 0.0.0.0:${PORT:-8000} --timeout 180
