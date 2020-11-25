FROM 12-slim
WORKDIR /index.js
COPY package.json /app
RUN npm install
COPY . /CA1
CMD ["npm", "start"]