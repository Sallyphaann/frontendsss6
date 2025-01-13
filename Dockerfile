# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight server to serve the built app
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
