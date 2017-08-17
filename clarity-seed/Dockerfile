FROM node:boron
MAINTAINER Tom Scanlan "tscanlan@vmware.com"

EXPOSE 4200


COPY . /app
WORKDIR /app

RUN npm install -g @angular/cli || true && \
	yarn && \
    npm rebuild node-sass --force
ENTRYPOINT ["ng"]
CMD ["serve", "--host", "0.0.0.0"]
