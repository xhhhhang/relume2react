import os
from pathlib import Path

# Base directory of the project
BASE_DIR = Path(__file__).parent.parent

# Data directory (default to 'data' in the project root)
DATA_DIR = Path(os.environ.get('RELUME_DATA_DIR', BASE_DIR / 'data'))

# Ensure the data directory exists
DATA_DIR.mkdir(parents=True, exist_ok=True)