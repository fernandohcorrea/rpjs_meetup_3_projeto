FROM phpdockerio/php:8.1-cli

ARG DK_GID=1000
ARG DK_UID=1000

RUN groupadd -g ${DK_GID} webapp
RUN useradd -g 1000 -u ${DK_UID} webapp

USER webapp

WORKDIR "/application"

COPY public public

ENV API_URL="http://localhost:3030"

CMD ["/usr/bin/php", "-S", "0.0.0.0:8181", "-t", "/application/public"]