#!/bin/bash
set -e

echo "Backing up SaltyVerse Portal config and data..."

cp -r ../config ../backups/config_$(date +%Y%m%d%H%M%S)
cp -r ../backend ../backups/backend_$(date +%Y%m%d%H%M%S)
cp -r ../frontend ../backups/frontend_$(date +%Y%m%d%H%M%S)

echo "Backup complete."
