# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Runtime stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create non-root user for nginx
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

# Change ownership of nginx directories
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d

# Create nginx PID directory with correct permissions
RUN mkdir -p /var/run/nginx && \
    chown -R appuser:appgroup /var/run/nginx

USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]