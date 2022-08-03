### Tests


1. Run tests in the folder:

    ```sh
    $ pytest test_post.py
    ```

Arquitetura de cenários
Estória: Cadastro de usuário 
Gostaria de cadastrar usuários na plataforma SolarMaker.
Para que seja possível visualizar, editar e deletar usuários

Premissas de Escopo: Aplicação disponível para cadastramento 

Critério de Aceite:
Dado que Usuário acesse a plataforma;
Será possível fazer o cadastro com Username ainda não existente, e-mail válido e não existente ainda na plataforma, e senha válida.  

Cenários em BDD
Cadastramento de usuário
Cenário: Realizando cadastro com dados válidos 
Dado usuário na página inicial
Quando acessa “Cadastrar novo usuário” e informa username, e-mail e senha 
Então salva e o cadastro é criado
Cenário: Realizando cadastro com e-mail inválido 
Dado usuário na página inicial
Quando acessa “Cadastrar novo usuário” e informa username, e-mail inválido e senha 
Então é exibido “Insira um endereço de e-mail válido”
Cenário: Realizando cadastro com e-mail existente 
Dado usuário na página inicial
Quando acessa “Cadastrar novo usuário” e informa username, e-mail existente e senha 
Então é exibido “Já existe usuário cadastrado para esse e-mail”
Cenário: Realizando cadastro com username existente 
Dado usuário na página inicial
Quando acessa “Cadastrar novo usuário” e informa username existente, e-mail e senha 
Então é exibido “Username não disponível ”
Cenário: Realizando cadastro com senha invalida 
Dado usuário na página inicial
Quando acessa “Cadastrar novo usuário” e informa username, e-mail e senha invalida  
Então é exibido “Senha inválida ”
