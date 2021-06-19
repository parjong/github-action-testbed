FROM ubuntu:18.04

RUN apt update
RUN apt install -y -qq gcc g++ cmake

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
