URL="http://127.0.0.1:8080/api/v1/read"

curl -X POST "$URL" \
  -H "Content-Type: text/plain" \
  --data-binary "./data/NYU7244800354_attlog.dat" \
  -i \
  -w "\n\nHTTP Status: %{http_code}\nTime: %{time_total}s\n"
