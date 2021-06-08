FROM node:16-alpine3.11 as build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn
COPY . ./

RUN yarn build

FROM nginx:1.21.0-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
