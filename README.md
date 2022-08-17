### API documentation

#### GET all clients

    http://localhost:8000/api/v1/clientes/

    Response:

    {
        "detail": "As credenciais de autenticação não foram fornecidas."
    }   

    or
    
   
    {
         "name": "eu",
         "email": "eu@eu.br",
         "phone_number": "(11)2222-2222",
         "adress": "rua tal",
         "cpf_cnpj": "111.111.111-00"          
       
    }

#### GET a client

    http://localhost:8000/api/v1/clientes/<id>/

    Example: http://localhost:8000/api/v1/clientes/12345678987/

    Response:

    {
        "name": "Joao carlos",
        "email": "joao@joao.br",
        "phone_number": "(11)92222-2222",
        "adress": "etc",
        "cpf_cnpj": "12345678987"
    }


### POST a client

    http://localhost:8000/api/v1/clientes/

    Request:

   {
        "name": "Joao carlos",
        "email": "joao@joao.br",
        "phone_number": "(11)92222-2222",
        "adress": "etc",
        "cpf_cnpj": "12345678987"
    }


#### GET all Projects

    http://localhost:8000/api/v1/projetos/

    Response:

    
   {
         "id": "7f6f4aed-c4f4-45b6-b08c-63aa0bf673c5",
         "project_name": "Hello",
         "client": "111.111.111-00",
         "description": "etc",
         "responsible": "fulano",
         "vendor": "fulano",
         "potency": 1222.0,
         "modules": "etc",
         "inverter": "etc",
         "status": "Em andamento",
         "budget": 100.0
   }
        
    

#### GET a Project

    http://localhost:8000/api/v1/projetos/<id>/

    Example: http://localhost:8000/api/v1/projetos/7f6f4aed-c4f4-45b6-b08c-63aa0bf673c5/

    Response:

    {
        "id": "7f6f4aed-c4f4-45b6-b08c-63aa0bf673c5",
        "project_name": "Hello",
        "client": "111.111.111-00",
        "description": "etc",
        "responsible": "fulano",
        "vendor": "fulano",
        "potency": 1222.0,
        "modules": "etc",
        "inverter": "etc",
        "status": "Em andamento",
        "budget": 100.0
    }

### POST a Project

    http://localhost:8000/api/v1/projetos/

    Request:

    {
        "project_name": "Hello",
        "client": "111.111.111-00",
        "description": "etc",
        "responsible": "fulano",
        "vendor": "fulano",
        "potency": 1222.0,
        "modules": "etc",
        "inverter": "etc",
        "status": "Em andamento",
        "budget": 100,0
    }
