
# ⚡ Redis Caching with Node.js

A practical demonstration of integrating **Redis caching** into a Node.js REST API to drastically improve performance and reduce external API/database load.

---

## 🚀 Performance Comparison

| Scenario | Response Time | Improvement |
|----------|--------------|-------------|
| ❌ Without Redis (Direct API Call) | **279 ms** | — |
| ✅ With Redis Cache (Subsequent Calls) | **5 ms** | ⚡ ~98% Faster |

> 📉 Response time reduced from **279ms → 5ms** using Redis caching.

---

## 🔴 Before Redis (No Caching)

![Before Redis](https://github.com/user-attachments/assets/ccc186ac-d73f-404f-a3c5-b95be8b7b8ce)

**What happens here:**
- Every request hits the external API
- Higher latency
- Increased network overhead
- No reuse of previously fetched data

---

## 🟢 After Redis (With Caching)

![After Redis](https://github.com/user-attachments/assets/8407b3b6-8e83-4fdf-a6e0-a6494a2bdd11)

**What happens here:**
- First request fetches data from API (~279ms)
- Response stored in Redis
- Subsequent requests served from memory (~5ms)
- Minimal latency
- Reduced external dependency calls

---

## 🧠 How Redis Improves Performance

```

Client Request
│
▼
Check Redis Cache
│
┌─────────────┐
│             │
Cache HIT   Cache MISS
│             │
│         Fetch from API/DB
│             │
│         Store in Redis
│             │
└──────┬──────┘
│
Send Response

````

### 🔁 Request Flow

1. Client sends request.
2. Server checks Redis for cached data.
3. If **Cache HIT** → return instantly (~5ms).
4. If **Cache MISS** → fetch from external API (~279ms).
5. Store data in Redis with TTL.
6. Return response.

---

## 🛠 Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **Redis** – In-memory caching layer  
- **REST API** – JSON responses  

---

## 📦 Installation & Setup

### 🔹 Prerequisites

- Node.js (v14+)
- Redis installed locally OR running via Docker

---

### 🔹 Steps

```bash
# Clone the repository
git clone https://github.com/SHREESH2004/Redis.git
cd Redis

# Install dependencies
npm install

# Start Redis server
redis-server

# Start the application
node index.js
````

Server runs at:

```
http://localhost:3000
```

---

## 🔌 API Endpoint

### `GET /`

Returns a list of todos from the external API (cached after first request).

### Sample Response

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
]
```

---

## ⚙ Configuration

| Variable       | Default   | Description         |
| -------------- | --------- | ------------------- |
| `PORT`         | 3000      | Server port         |
| `REDIS_HOST`   | localhost | Redis host          |
| `REDIS_PORT`   | 6379      | Redis port          |
| `CACHE_EXPIRY` | 3600      | Cache TTL (seconds) |

---

## 📈 Why Use Redis?

Redis is an **in-memory key-value store** optimized for ultra-fast read operations.

### ✅ Benefits

* Sub-millisecond response time
* Reduces API/database load
* Improves scalability
* Built-in TTL support
* Handles high concurrent traffic efficiently

Without caching:

* Every request makes an external call.

With Redis:

* Only the first request is slow.
* All subsequent requests are near-instant.

---

## 📄 License

MIT License. See `LICENSE` file for details.

```
