# preparar frontend

cd frontend
npm install

# preparar backend

cd api
npm install

# preparar banco de dados

na raiz do projeto execute:
docker-compose up

# executar backend

na raiz do projeto execute:
nodemon api/api/index.js

# executar frontend

cd frontend
npm run start
