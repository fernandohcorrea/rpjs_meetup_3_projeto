# Requisitos

* Docker
* Docker-Compose
* Node > 16.*

## Install


### API

```bash
$ cd api
$ npm i
```


### API

```bash
$ cd worker
$ npm i
```


## Run Docker-Compose

```bash
$ docker-compose up
```


## K6

### Download

[https://k6.io/open-source/](https://k6.io/open-source/)

### Run K6
```bash
k6 run --vus 10 --duration 30s script.js
```
## rabbit
[http://localhost:8080/](http://localhost:8080/)

## webapp
[http://localhost:8383/](http://localhost:8383/)