FROM node:12 AS build
WORKDIR /app/
ARG PG_USERNAME 
ENV PG_USERNAME PG_USERNAME
ARG PG_DATABASE
ENV PG_DATABASE PG_DATABASE
ARG PG_PASSWORD
ENV PG_PASSWORD PG_PASSWORD
ARG SESSION_SECRET
ENV SESSION_SECRET SESSION_SECRET
ENV NODE_ENV "production"
ENV REDIS_HOST "redis"
ENV PG_HOST "postgres"
ENV SERVER_PORT "4000"
ADD .env package.json package-lock.json /app/
RUN npm ci
ADD . /app/
RUN npm run build

FROM node:12
ENV NODE_ENV "production"
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci --prod
COPY --from=build /app/dist/ /app/
COPY ormconfig.js /app/
