# Imagem de Origem
FROM node:17.8.0-alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json

RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm install react-scripts@5.0.1 -g
# Inicializa a aplicação
CMD ["npm", "start"]