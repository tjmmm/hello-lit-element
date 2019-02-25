FROM node:10.15.1-alpine


RUN apk update && apk upgrade && apk --update add \
  yarn \
  && \
  rm -rf /var/cache/apk/*

RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn

# webpack-dev-server
EXPOSE 8080

CMD ["yarn", "webpack-dev-server"]
