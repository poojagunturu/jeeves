FROM python:3

WORKDIR /server

COPY . /server


RUN pip install numpy && pip3 install -r requirements.txt

EXPOSE 5000

CMD celery -B -A celery_app worker --loglevel=info
