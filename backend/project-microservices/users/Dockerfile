FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY ./src ./src/

EXPOSE 4004

RUN npx prisma init

COPY ./prisma ./prisma/

COPY .env .

CMD ["npm", "run", "start"]