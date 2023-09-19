# HTTP Headers

HTTP headers are essential in API development, including when working with the Node.js Express framework. HTTP headers are key-value pairs sent in HTTP requests and responses. They provide metadata and instructions on how to handle data, and some common headers include Content-Type, Authorization, and Cache-Control.

## In APIs, headers serve critical purposes:

* **Content Negotiation:** 
  
  Headers like "Content-Type" help the client understand the format of the data being sent, allowing correct parsing and processing.

* **Authentication and Authorization:**
  
  The "Authorization" header often carries authentication tokens or API keys to grant access to resources.

* **Caching and Performance:** 
  
  Headers like "Cache-Control" control data caching, improving performance and server load.

* **Security:** 
  
  Headers enhance security by preventing certain attacks, such as the "X-Content-Type-Options" and "Strict-Transport-Security" headers.

* **Cross-Origin Requests:** 
  
  CORS-related headers like "Access-Control-Allow-Origin" enable secure cross-origin requests.

In Express, you manipulate headers using the response object for sending responses and the request object for reading headers from incoming requests.

[**Header References**](https://developer.mozilla.org/en-US/docs/Web/API/Headers)


## Results 

![Screenshot 2023-09-18 212217](https://github.com/SharonCao0920/basic-javascript/assets/54694766/78c3d15e-82e0-4ae1-b4a9-bb155be8d988)

![Screenshot 2023-09-18 212229](https://github.com/SharonCao0920/basic-javascript/assets/54694766/d11a794a-8054-4476-9026-bfdaf838fdc1)

![Screenshot 2023-09-18 212253](https://github.com/SharonCao0920/basic-javascript/assets/54694766/f9924abf-8f39-440a-8039-de776c8b426f)

![Screenshot 2023-09-18 213114](https://github.com/SharonCao0920/basic-javascript/assets/54694766/d68d4f31-61c2-4d21-a7e9-51a57a558389)
