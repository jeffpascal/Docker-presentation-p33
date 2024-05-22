# Use the official Node.js 14 as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port 3000 available outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["node", "app.js"]
