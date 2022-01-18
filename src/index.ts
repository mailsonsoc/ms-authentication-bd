import express from 'express';
import statusRoute from './routes/status.route';
import userRoute from './routes/user.route';

const app = express();
//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurações de rotas
app.use(userRoute);
app.use(statusRoute);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})