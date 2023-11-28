# Use an official Node.js image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Set the entry point
CMD ["npm", "start"]
