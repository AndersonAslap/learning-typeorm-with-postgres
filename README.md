## Typeorm

> Para instalar o typeorm, precisamos adicionar três pacotes, sendo que um pacote, é obrigatório para o typeorm funcionar, e o outro varia de acordo com o banco que você utilizará.

```bash
yarn add typeorm reflect-metadata pg
```

> Devemos adicionar o reflect-metadata ao nosso server.ts, e adicionar duas configurações ao nosso tsconfig, que o typeorm pede para habilitarmos:

```js
// server.ts
import 'reflect-metadata'
import express from 'express';

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log('listening on port 3333');
})
```

```js
// tsconfig.json 
...
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,             
  }
}
```

> Devemos criar um novo arquivo chamado “ormconfig.json”, onde fica as configurações de conexão do typeorm, e o caminhos para algumas pastas onde serão criadas as migrations e as entidades.

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "tutorialnode",
  "entities": [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```
