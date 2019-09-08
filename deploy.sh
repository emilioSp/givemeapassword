docker build --no-cache -t espatola/givemeapassword -f Dockerfile . \
&& docker push espatola/givemeapassword \
&& ssh emilio@edo "\
docker pull espatola/givemeapassword \
&& (docker stop givemeapassword || true)\
&& (docker rm givemeapassword || true)\
&& docker run --detach --restart=unless-stopped --hostname \$(hostname) -p 80:80 -it --name givemeapassword espatola/givemeapassword:latest"