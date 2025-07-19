#!/usr/bin/env bash

# Prompt the user for the target year:
read -p "Enter the target year: " TARGET_YEAR

# Check if the input is a valid year:
if ! [[ "${TARGET_YEAR}" =~ ^[0-9]{4}$ ]]; then
  echo "Invalid year: ${TARGET_YEAR}"
  exit 1
fi

# Prompt the user for the last year:
read -p "Enter the last year: " LAST_YEAR

# Check if the input is a valid year:
if ! [[ "${LAST_YEAR}" =~ ^[0-9]{4}$ ]]; then
  echo "Invalid year: ${LAST_YEAR}"
  exit 1
fi

# Check if the target year is less than or equal to the last year:
if [ "${TARGET_YEAR}" -gt "${LAST_YEAR}" ]; then
  echo "The target year must be less than or equal to the last year."
  exit 1
fi

# Loop over years from the target year to the last year:
for YEAR in $(seq "${TARGET_YEAR}" "${LAST_YEAR}"); do
  # Create a directory for the year
  mkdir -p "${YEAR}"

  # Loop over months 1 to 12:
  for MONTH in $(seq 1 12); do
    # Retrieve the month name and number:
    MONTH_NAME=$(date -v${MONTH}m -v1d -v${YEAR}y +%B)
    MONTH_NUMBER=$(date -v${MONTH}m -v1d -v${YEAR}y +%m)

    # Determine the last day of the month:
    LAST_DAY=$(date -v${MONTH}m -v1d -v${YEAR}y -v+1m -v-1d +%d)
    
    # Create the directory for the month inside the yearly directory:
    MONTH_DIR="${YEAR}/${MONTH_NAME}"
    mkdir -p "${MONTH_DIR}"

    # Create subdirectories for each day inside the monthly directory:
    for DAY in $(seq 1 "${LAST_DAY}"); do
      DAY_PAD=$(printf "%02d" "${DAY}")
      DAY_DIR="${DAY_PAD}.${MONTH_NUMBER}.${YEAR}"
      mkdir -p "${MONTH_DIR}/${DAY_DIR}"
      cd "${MONTH_DIR}/${DAY_DIR}"
      touch "README.md"
      cd ../../..
    done
  done
done

echo "All directories for each day from ${TARGET_YEAR} to ${LAST_YEAR} have been created, organized by year."
