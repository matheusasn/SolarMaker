### API documentation

#### GET all users

    http://localhost:8000/users/

    Response:

    [
        {
            "id": "6916469c-5fe2-4284-8a6b-db4e0746cdfc",
            "username": "me",
            "email": "me@me"
        },
        {
            "id": "752f73f0-80e7-4229-9d85-d4b0fb883df5",
            "username": "hi",
            "email": "hi@hi"
        }
    ]

#### GET a user

    http://localhost:8000/users/<id>/

    Example: http://localhost:8000/users/6916469c-5fe2-4284-8a6b-db4e0746cdfc/

    Response:

    {
        "id": "6916469c-5fe2-4284-8a6b-db4e0746cdfc",
        "username": "me",
        "email": "me@me"
    }


### POST a user

    http://localhost:8000/users/

    Request:

    {
        "username": "me",
        "email": "me@me",
        "password": "me"
    }

#### GET all Projects

    http://localhost:8000/projects/

    Response:

    [
        {
            "id": "3aa0b3a3-f052-40d2-8d76-05147f990152",
            "project_name": "Hello",
            "client_cpf_cnpj": "123456789",
            "initial_data": "2022-07-29",
            "final_data": null,
            "status": "Análise",
            "budget": 100.0
        }
    ]

#### GET a Project

    http://localhost:8000/projects/<id>/

    Example: http://localhost:8000/projects/3aa0b3a3-f052-40d2-8d76-05147f990152/

    Response:

    {
        "id": "3aa0b3a3-f052-40d2-8d76-05147f990152",
        "project_name": "Hello",
        "client_cpf_cnpj": "123456789",
        "initial_data": "2022-07-29",
        "final_data": null,
        "status": "Análise",
        "budget": 100.0
    }

### POST a Project

    http://localhost:8000/projects/

    Request:

    {
        "id": "3aa0b3a3-f052-40d2-8d76-05147f990152",
        "project_name": "Hello",
        "client_cpf_cnpj": "123456789",
        "initial_data": "2022-07-29",
        "final_data": null,
        "status": "Análise",
        "budget": 100.0
    }
