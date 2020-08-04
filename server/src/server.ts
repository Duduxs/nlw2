import express from 'express';
import cors from 'cors';
import routes from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

//Métodos HTTP
//GET: Coletar dados
//POST: Criar dados
//PUT: Atualizar dados
//DELETE: Deletar dados

//Corpo (Request body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, Filtros, Ordenação


