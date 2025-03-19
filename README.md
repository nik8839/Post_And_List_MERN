# Posts Microservices  <!-- Project Title -->

## Overview  <!-- Project Description -->
This project consists of two microservices that work together to create, list, and manage posts with comments. The microservices communicate with each other to handle post creation, retrieval, and comment addition.

## Features  <!-- Key Features -->
- ✅ Create and list posts  
- ✅ Add comments to posts  
- ✅ Handle posts and comments in separate microservices  
- ✅ Load posts asynchronously  

## Microservices  <!-- Microservices Overview -->

### 📝 Posts Service  <!-- Posts Microservice -->
- Responsible for creating and listing all posts.
- Stores posts in-memory (or database if extended).
- Provides API endpoints to retrieve posts.

### 💬 Comments Service  <!-- Comments Microservice -->
- Responsible for adding and retrieving comments for posts.
- Each comment is associated with a specific post.
- Stores comments in-memory (or database if extended).
- Provides API endpoints to manage comments.

## API Endpoints  <!-- Available API Routes -->

### 📌 Posts Service  <!-- API for Posts -->

```http
POST /posts/${id}/comments
