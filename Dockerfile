FROM node:18-alpine

WORKDIR /app

# Install project dependencies
COPY package.json  ./
RUN npm install

# Copy rest of the project
COPY . .

# Expose Webpack Dev Server port
EXPOSE 7777

# Start development server
CMD ["npm", "start"]
