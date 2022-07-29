### Development

Uses the default Django development server.

1. Build the images and run the containers:

    ```sh
    $ docker-compose up -d --build
    ```

    Test it out at [http://localhost:8000](http://localhost:8000). The "app" folder is mounted into the container and your code changes apply automatically.

### Production

Uses gunicorn + nginx.

1. Build the images and run the containers:

    ```sh
    $ docker-compose -f docker-compose.prod.yml up -d --build
    ```

    Test it out at [http://localhost:1337](http://localhost:1337). No mounted folders. To apply changes, the image must be re-built.

### Comands

1. Create admin user

    ```sh
    docker container ls

    docker exec -it 0e2ddd5aaa2a python manage.py createsuperuser --email admin@admin.com --username admin
    ```
    
    1.1. Get the following error?

        "django.db.utils.OperationalError: FATAL: database "hello_django_dev" does not exist"

        Run 

        ```sh
        $docker-compose down -v   
        ```
        to remove the volumes along with the containers. 
        
        Then, re-build the images, run the containers, and apply the migrations.

        ```sh
        $docker-compose exec backend python manage.py migrate --noinput
        ```

3. Virtual Env - To run django local

    ```sh
    sudo apt-get install python-virtualenv
    
    cd app

    virtualenv python venv

    source './venv/bin/activate'

    pip install -r requirements.txt
    ```

4. Run Django Local

    ```sh
    cd app

    source './venv/bin/activate'

    python manage.py runserver

    or 

    sudo docker-compose exec backend python manage.py runserver
    ```

5. To make migrations

    ```sh
    python manage.py makemigrations

    or

    sudo docker-compose exec backend python manage.py makemigrations
    ``` 

