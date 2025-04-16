# Base image with Node + Git
FROM node:20-bullseye

# Create app directory
WORKDIR /app

# Copy repo into container
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Optional: install Playwright browsers
RUN npx playwright install --with-deps

# Default command (override with docker run if needed)
CMD [ "npx", "cypress", "run" ]