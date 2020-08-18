FROM node:12 AS build
WORKDIR /app/
ARG DB_USERNAME 
ENV DB_USERNAME DB_USERNAME
ARG DB_DATABASE
ENV DB_DATABASE DB_DATABASE
ARG DB_PASSWORD
ENV DB_PASSWORD DB_PASSWORD
ARG SESSION_SECRET
ENV SESSION_SECRET SESSION_SECRET
ENV NODE_ENV "production"
ENV REDIS_HOST "redis"
ENV DB_HOST "postgres"
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
