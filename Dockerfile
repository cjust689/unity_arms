FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install -g @vue/cli

RUN npm install

EXPOSE 3000

EXPOSE 5000

CMD ["npm", "run", "serve"]