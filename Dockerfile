FROM python:3.8

WORKDIR /app

COPY ./server/requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN pip install requests

COPY ./server/ .

CMD [ "python", "./run.py" ]