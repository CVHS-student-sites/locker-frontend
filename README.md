# create-svelte

### run image
sudo docker run --name locker-frontend -d -p 4000:4000 ghcr.io/birdpump/cvhs-locker-frontend/cvhs-locker-frontend:latest

### run watchtower
sudo docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower -i 60 locker-backend locker-frontend
