const fs = require('fs');

// Renomear arquivo

fs.rename('arquivo.txt', 'arquivo_renomeado.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Arquivo renomeado com sucesso!');
});

