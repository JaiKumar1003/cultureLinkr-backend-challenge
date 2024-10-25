```markdown
# Express Product API

This is a simple Express-based API for managing products, allowing you to add products and calculate the total value of all products in inventory.

## Features
- **Add Product**: Create a new product by specifying its name, price, and quality.
- **Calculate Total Value**: Calculate the total value of all stored products based on price and quality.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your local machine.
- [Postman](https://www.postman.com/) or any API client for testing the API endpoints.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JaiKumar1003/cultureLinkr-backend.git
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node server.js
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

### API Endpoints

#### 1. Root Route
- **URL**: `/`
- **Method**: `GET`
- **Description**: Check if the server is running.
- **Response**: `Server is up and running!`

#### 2. Create Product
- **URL**: `/products/create`
- **Method**: `POST`
- **Description**: Add a new product to the list.
- **Headers**: `Content-Type: application/json`
- **Body Parameters**:
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "quality": 2
  }
  ```
- **Success Response**:
  ```json
  {
    "message": "Product created successfully",
    "product": {
      "name": "Product Name",
      "price": 100,
      "quality": 2
    }
  }
  ```

#### 3. Calculate Total Value
- **URL**: `/products/total-value`
- **Method**: `POST`
- **Description**: Calculate the total value of all products based on price and quality.
- **Headers**: `Content-Type: application/json`
- **Response**:
  ```json
  {
    "totalValue": 200
  }
  ```

### Example Request with Postman

1. **Create Product**:  
   - Set method to `POST`, URL to `http://localhost:3000/products/create`.
   - In the `Body` tab, choose `raw` and `JSON` format.
   - Enter JSON data like:
     ```json
     {
       "name": "Product A",
       "price": 50,
       "quality": 2
     }
     ```
   - Send the request.

2. **Calculate Total Value**:
   - Set method to `POST`, URL to `http://localhost:3000/products/total-value`.
   - Send the request. You’ll get the total value of all products stored in the server.

### Troubleshooting

- If requests are not working, make sure the server is running, and that the correct HTTP method (`POST` or `GET`) and endpoint URL are used.
- For any JSON body, ensure the `Content-Type` header is set to `application/json` in Postman.

This README provides setup instructions, endpoint documentation, and example usage, which should cover your requirements for starting and testing the API.
