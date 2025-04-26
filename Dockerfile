FROM node:22-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS development
ENV NODE_ENV=development
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS builder
WORKDIR /app
ENV NODE_ENV=production
ENV NODE_ENV=staging
COPY . .
RUN npm run build

FROM node:22-alpine AS staging
WORKDIR /app
ENV NODE_ENV=staging
COPY --from=builder /app ./
CMD ["npm", "run", "start"]

FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
CMD ["npm", "run", "start"]
