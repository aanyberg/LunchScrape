# Use Node.js base image
FROM node:14-alpine as build

# Set working directory
WORKDIR /

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy frontend files
COPY . .

# Build the React app
RUN npm run build

# Use lightweight Nginx image
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
