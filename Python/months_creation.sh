#!/usr/bin/env bash

# Set the year you want to create directories for.
TARGET_YEAR=2023

# Loop over the months from 01 to 12
for MONTH in $(seq -w 1 12); do
    # Determine the last day of the given month (handles leap years)
    LAST_DAY=$(date -d "${TARGET_YEAR}-${MONTH}-01 +1 month -1 day" +%d)

    # Create a directory for the month (e.g., "01-2023")
    MONTH_DIR="${MONTH}-${TARGET_YEAR}"
    mkdir -p "${MONTH_DIR}"

    # Now create subdirectories for each day in DD.MM.YYYY format
    for DAY in $(seq -w 1 ${LAST_DAY}); do
        DAY_DIR="${DAY}.${MONTH}.${TARGET_YEAR}"
        mkdir -p "${MONTH_DIR}/${DAY_DIR}"
    done
done

echo "All directories for each day in ${TARGET_YEAR} have been created."
