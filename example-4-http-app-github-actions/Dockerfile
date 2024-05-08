# Stage 1: Build Environment
# Use the official Node.js 14 image as the build environment
FROM node:14 as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed dependencies (none in this case, but useful for future use)
RUN npm install

# Copy the rest of your application code
COPY . .

# Stage 2: Production Environment
# Use a smaller version of the Node.js image for production
FROM node:14-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy built files from the builder stage
COPY --from=builder /usr/src/app .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
