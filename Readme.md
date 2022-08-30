#
`docker ps [-a][-q]`

#
`docker [start|stop|rm] CONTAINER|UUID`

`docker rm $(docker ps -a -q) -f`

#
`docker run [-d] [-it] [--rm] [--name NAME] [-p PORT_HOST:PORT_CONTAINER] CONTAINER|UUID`

#
`docker logs CONTAINER`

#
`docker exec [-it] CONTAINER|UUID COMMAND`

`docker attach CONTAINER|UUID`

#
`docker run [-v PATH_HOST:PATH_CONTAINER] CONTAINER|UUID` (it's created path if not exists)

`docker run [--mount type=bind,source=PATH_HOST,target=PATH_CONTAINER] CONTAINER|UUID` (if path not exists, throw a error)

> Use `"$(pwd)"` to get current path.

#
`docker volume [create|inspect|rm] VOLUME_NAME`

`docker volume [ls|prune]`

`docker run [-v VOLUME_NAME:PATH_CONTAINER] CONTAINER|UUID` 

`docker run [--mount type=VOLUME_NAME,source=VOLUME,target=PATH_CONTAINER] CONTAINER|UUID`

#
`docker [pull|push] IMAGE_NAME`

#
`docker images [-q]`

`docker rmi IMAGE_NAME`

`docker build -t IMAGE_NAME DOCKERFILE`

`docker rmi $(docker images -q)`

#
`docker network [create|inspect] [--driver bridge|host] NETWORK_NAME`

`docker network [ls|prune]`

`docker run --network NETWORK_NAME IMAGE_NAME`

`docker network [connect|disconnect] NETWORK_NAME CONTAINER`
