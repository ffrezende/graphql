import app from './app';

const port = 3000;

app.listen(port, async err => {
  if (err) return console.log(err);
  return console.log(`Servidor executando na porta ${port}`);
});
