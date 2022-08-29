FROM node:16.13.2-alpine

ARG DK_UID=1000
ARG DK_GID=1000
ARG API_PORT=3000

RUN apk --no-cache add shadow && \
    usermod -u ${DK_UID:-1000} node && \
    groupmod -g ${DK_GID:-1000} node

RUN mkdir /application

RUN chown node:node /application

USER node

WORKDIR /application