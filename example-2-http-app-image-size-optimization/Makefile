# Define default action when "make" is run without arguments
.PHONY: all
all: run

# Image name to use in all Docker commands
IMAGE_NAME=nodejs-app-example-2

# Container name to use in Docker commands
CONTAINER_NAME=nodejs-container-example-2

# Build the Docker image
.PHONY: build
build:
	@echo "Building Docker image..."
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
.PHONY: run
run: build
	@echo "Running Docker container..."
	docker run -d --name $(CONTAINER_NAME) -p 3000:3000 $(IMAGE_NAME)

# Stop the Docker container
.PHONY: stop
stop:
	@echo "Stopping Docker container..."
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

# Remove the Docker image
.PHONY: clean
clean: stop
	@echo "Removing Docker image..."
	docker rmi $(IMAGE_NAME)

# View logs of the Docker container
.PHONY: logs
logs:
	@echo "Fetching Docker container logs..."
	docker logs $(CONTAINER_NAME)

# Enter the Docker container for debugging
.PHONY: shell
shell:
	@echo "Entering Docker container shell..."
	docker exec -it $(CONTAINER_NAME) /bin/bash
