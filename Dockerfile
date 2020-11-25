FROM node:9-slim
WORKDIR /CA1
COPY package.json /CA1
RUN npm install
COPY . /CA1
CMD ["npm","start"]
