FROM mongo
MAINTAINER DongramO <github.com/DongramO>

RUN apt-get update
# RUN apt-get install vim

# RUN rm ./etc/mongo.conf.orig
COPY ./config/mongo.conf /etc/mongo.conf

# EXPOSE 27017