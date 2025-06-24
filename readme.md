To check whether can we talk between container directly we will do
docker run -p 27017:27017 mongo
docker run image_Name
so here MongoDB is running in different container and our image is running in different container
but we will observe that connection does not occur
now will create network
docker network create kirtikumarnetwork
attach above created network to containers

docker run -d -v volume_database:/data/db --name kirtikumardomain --network kirtikumarnetwork -p 27017:27017 mongo

kirtikumardomain is imp it acts as domain name. we should put it mongodb url indicating connect to this domain name
const mongoUrl: string = 'mongodb://kirtikumardomain:27017/myDatabase';

now again build as we changed mongodb url
docker build -t networkcheck .
now run node code in container
docker run  -p 3000:3000 --name backend --network kirtikumarnetwork networkcheck

networkcheck is name of image
here –name is not imp as we are not going to use it anywhere.
