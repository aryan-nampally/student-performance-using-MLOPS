## End to End MAchine Learning Project

**Target Python runtime:** `Python 3.13` ✅


## Deployment (Azure App Service)

- Add `gunicorn` to `requirements.txt` so the WSGI server is installed during deployment.

- Recommended startup command (Linux App Service):

    `gunicorn app:app --workers 1 --bind 0.0.0.0:8000 --timeout 180`

  (Force a single worker for ML apps on low-tier plans to avoid memory/CPU stalls.)

- Alternatively, use the provided `startup.sh` script:

    `./startup.sh`

---

## Tips to cut deployment time (45 min → ~5 min) ⚡

1. Remove GPU / CUDA deps (mandatory)
   - Remove packages like `torch`, `tensorflow-gpu`, `nvidia-*`, `cupy`.
   - Keep CPU-friendly versions only.

2. Slim `requirements.txt` — runtime-only dependencies
   - Remove `seaborn`, `matplotlib`, `notebook`, `jupyter`, any training-only libs.
   - Example production list: `flask`, `gunicorn`, `numpy`, `pandas`, `scikit-learn`, `xgboost`, `catboost`, `joblib`.

3. Force CPU-only / binary-first installs
   - Add `--prefer-binary` at the top of `requirements.txt` to avoid source builds.

4. Limit Gunicorn workers (startup fix)
   - Use a single worker: `gunicorn app:app --workers 1 --timeout 180`.

5. Lazy-load models (critical)
   - Avoid heavy imports at module import time. Load models lazily on first request or during startup events.

Follow these and your deployment time should drop significantly. 🎯
