# Food App

_This project is developed using express framework with docker support._

## Steps

1. Build images:
   `docker build -t akkuakhildev/express-food-api .`
2. Create network: `docker network create food-net`
3. Run MongoDB container: `docker run -d --name mongodb --network food-net mongo`
4. Run food app container: `docker run --rm -p 3000:3000 --name food-app -v $(pwd):/app:ro --network food-net akkuakhildev/express-food-api`
5. Stop container: `docker stop food-app`

**Author: Akhildev MJ**
