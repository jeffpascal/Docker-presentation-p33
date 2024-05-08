# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json file into the working directory
# This file defines the node app and its dependencies
COPY package.json /app

# Install any needed packages specified in package.json
# This is done separately from copying the entire app to utilize Docker's cache
# and avoid reinstalling all node modules upon every build
RUN npm install

# Install nc
RUN apt-get update && apt-get install -y netcat && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the rest of the application code to the working directory
COPY . /app

# Make port 3000 available to the world outside this container
# This port must match the one on which Node.js app is set to listen
EXPOSE 3000

# Define environment variable
# Use this variable to inform the environment your app is running in, like production or development
ENV NODE_ENV=production

# Run the app when the container launches
# CMD tells Docker to execute the command when the container starts
CMD ["node", "app.js"]
