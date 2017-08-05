FROM python:3.4-onbuild
MAINTAINER Tom Scanlan "tscanlan@vmware.com"

RUN pip install -r requirements.txt
COPY . /app
WORKDIR /app

ENTRYPOINT ["python"]
CMD ["app.py"]
