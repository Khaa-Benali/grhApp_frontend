# Utilisez une image de base Nginx
FROM nginx:alpine
# Copiez les fichiers de l'application dans le conteneur
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
# Exposez le port 80 sur lequel Nginx écoutera (par défaut)
EXPOSE 80
# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

