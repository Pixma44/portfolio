# Build stage
FROM rust:1.82-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy Cargo files for dependency caching
COPY Cargo.toml Cargo.lock ./

# Create dummy main.rs for dependency build
RUN mkdir src && echo "fn main() {}" > src/main.rs

# Build dependencies (cached layer)
RUN cargo build --release

# Remove dummy source
RUN rm src/main.rs

# Copy real source code
COPY src ./src

# Build the application
RUN cargo build --release

# Runtime stage
FROM debian:bookworm-slim

WORKDIR /app

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy the binary from builder stage
COPY --from=builder /app/target/release/portfolio-backend /app/portfolio-backend

# Create non-root user
RUN useradd -r -u 1001 appuser
USER appuser

EXPOSE 3001

CMD ["./portfolio-backend"]