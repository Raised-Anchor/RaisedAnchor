#stage 0 - build frontend assests
FROM node:12.16.3-alpine as build
WORKDIR /app2.05
COPY package*.json ./
run npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

#Stage 1 - Serve frontend assets.
FROM fholzer/nginx-brotli:v1.12.2
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app2.05/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx","-g","daemon off;"]