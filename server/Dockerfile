FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i -f
RUN npm i pm2 
CMD ["npm", "run", "dev"]