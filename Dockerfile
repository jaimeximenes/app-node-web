# Usar imagem base do Node.js
FROM node:18-alpine

# Criar diretório de trabalho
WORKDIR /app

# Copiar arquivos de package primeiro (para melhor cache)
COPY package*.json ./

# Instalar dependências
RUN npm install --only=production

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a aplicação usa
EXPOSE 80

# Comando para rodar a aplicação
CMD ["node", "app.js"]
