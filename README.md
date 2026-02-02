## End to End MAchine Learning Project

## Deployment (Azure App Service)

- Add `gunicorn` to `requirements.txt` so the WSGI server is installed during deployment.

- Recommended startup command (Linux App Service):

    `gunicorn app:app --workers 1 --bind 0.0.0.0:8000 --timeout 180`

  (Force a single worker for ML apps on low-tier plans to avoid memory/CPU stalls.)

- Alternatively, use the provided `startup.sh` script:

    `./startup.sh`

