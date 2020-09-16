FROM node:10 as build-deps
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build:api
RUN yarn build:prod

FROM node:10
COPY --from=build-deps /app/wwwroot .
RUN npm install axios -g
RUN npm install express -g
RUN npm install cors -g
EXPOSE 80

ENV NODE_PATH="/usr/local/lib/node_modules"
CMD [ "node", "api/server.js"]