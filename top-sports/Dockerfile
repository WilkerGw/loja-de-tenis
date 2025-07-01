# Estágio 1: Build
# Usamos uma imagem Node completa para instalar dependências e construir o projeto
FROM node:20-alpine AS build
WORKDIR /app

# Copia os arquivos de manifesto de pacotes
COPY package*.json ./

# Instala as dependências de produção
RUN npm install --only=production

# Copia o resto dos arquivos do projeto
COPY . .

# Instala as dependências de desenvolvimento (necessárias para o build)
RUN npm install

# Constrói a aplicação
RUN npm run build

# Estágio 2: Produção
# Usamos uma imagem Node menor para rodar a aplicação
FROM node:20-alpine AS production
WORKDIR /app

# Copia os arquivos de manifesto e o node_modules de produção do estágio de build
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Copia os arquivos da aplicação construída
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.mjs ./

# Expõe a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar a aplicação em produção
CMD ["npm", "start"]