FROM python:3.8

WORKDIR /app

COPY ./server /app

RUN apt-get update -y && apt-get install -y python3-pip python3-dev build-essential libpq-dev
RUN pip install -r requirements.txt
RUN pip install requests

CMD python3 run.py