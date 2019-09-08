# minimal debian
FROM alpine:latest

# install essential packages
RUN apk add --no-cache --update bash vim nodejs yarn

# copy project folder into /var
COPY ./ /var/givemeapassword

# cd into project folder
WORKDIR /var/givemeapassword

# install JS dependencies
RUN yarn install --production

CMD ["yarn", "prod"]