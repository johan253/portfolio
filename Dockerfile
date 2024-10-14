# Select Base Image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the app
RUN npm run build

# Expose the port
# EXPOSE 3000

# Start the app
CMD ["npm", "start"]