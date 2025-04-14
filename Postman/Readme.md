# 📬 LamboDrip API Tests – Postman Collection

This folder contains API-level tests for LamboDrip, built using **Postman**.

The goal is to validate key store endpoints, especially around the cart workflow and product listings.

---

## 📂 Contents

- `LamboDrip API Tests.postman_collection.json`  
  → Postman collection with all requests

---

## 📦 Tested Endpoints

### 🔹 `POST /cart/add.js`
- Adds a product to the cart via direct API
- Body: `x-www-form-urlencoded`
  - `id` (product variant)
  - `quantity`
- ✅ Returns JSON with full cart item details
- Use case: validate Shopify’s cart API integration

---

### 🔹 `GET /collections/all`
- Fetches the main product listing (HTML)
- ✅ Returns status `200 OK`
- Use case: verify page loads, scrape data, measure performance

---

## ▶️ How to Use

1. Open Postman  
2. Import the collection file: postman/LamboDrip API Tests.postman_collection.json
3. Select a request and click `Send`

You can tweak IDs, quantities, or headers for different scenarios.

---

## 🛠️ Optional CLI Execution

If you want to run these tests from the terminal:

1. Install [Newman](https://www.npmjs.com/package/newman):
```bash
npm install -g newman
```
1. Run the collection:
```bash
newman run postman/LamboDrip API Tests.postman_collection.json
```

---

## 🧪 Test Goals
1. Ensure the cart API works outside the UI
2. Spot any server issues (400/500 status)
3. Validate content returned by Shopify endpoints

---

## 📌 Notes

1. Shopify may throttle or cache aggressively — test carefully
2. This collection focuses only on public/store-facing endpoints
3. No authentication or admin API tested here
Let me know if you want to add a screenshot section or some result examples!