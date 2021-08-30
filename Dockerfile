FROM node

WORKDIR /app

EXPOSE 3000

EXPOSE 5000

COPY ./package*.json ./

RUN npm install -g @vue/cli

RUN npm install -g @vue/cli-service

RUN npm install

CMD ["npm", "run", "serve"]