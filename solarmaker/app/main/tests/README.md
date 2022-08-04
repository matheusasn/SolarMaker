### Tests


1. Run tests in the folder:

    ```sh
    $ pytest test_post.py
    ```

###  Arquitetura de cenários

    1.  Estória: Cadastro de usuário
    ```sh 
    Gostaria de cadastrar usuários na plataforma SolarMaker.
    Para que seja possível visualizar, editar e deletar usuários

    Premissas de Escopo: Aplicação disponível para cadastramento 

    Critério de Aceite:
    Dado que Usuário acesse a plataforma;
    Será possível fazer o cadastro com Username ainda não existente, e-mail válido e não existente ainda na plataforma, e senha válida.  
    ```

    ###  Cenários em BDD

    Cadastramento de usuário

    1.1  Cenário: Realizando cadastro com dados válidos
    ```sh 
    Dado usuário na página inicial
    Quando acessa “Cadastrar novo usuário” e informa username, e-mail e senha 
    Então salva e o cadastro é criado
    ```
    1.2.  Cenário: Realizando cadastro com e-mail inválido 
    ```sh
    Dado usuário na página inicial
    Quando acessa “Cadastrar novo usuário” e informa username, e-mail inválido e senha 
    Então é exibido “Insira um endereço de e-mail válido”
    ```
    1.3.  Cenário: Realizando cadastro com e-mail existente 
    ```sh
    Dado usuário na página inicial
    Quando acessa “Cadastrar novo usuário” e informa username, e-mail existente e senha 
    Então é exibido “Já existe usuário cadastrado para esse e-mail”
    ```
    1.4.  Cenário: Realizando cadastro com username existente 
    ```sh
    Dado usuário na página inicial
    Quando acessa “Cadastrar novo usuário” e informa username existente, e-mail e senha 
    Então é exibido “Username não disponível ”
    ```
    1.5.  Cenário: Realizando cadastro com senha invalida 
    ```sh
    Dado usuário na página inicial
    Quando acessa “Cadastrar novo usuário” e informa username, e-mail e senha invalida  
    Então é exibido “Senha inválida ”
    ```
