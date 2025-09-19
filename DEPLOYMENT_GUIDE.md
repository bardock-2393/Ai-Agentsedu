# AI Educational Platform - EC2 Deployment Guide

This guide will help you deploy the AI-powered educational platform to an AWS EC2 instance for university demonstrations.

## 🏗️ Architecture Overview

The platform consists of:
- **Backend**: FastAPI with Google ADK agents (Python)
- **Frontend**: Next.js application (React/TypeScript)
- **Database**: SQLite for sessions
- **Reverse Proxy**: Nginx for load balancing and SSL

## 🚀 Quick Deployment Steps

### 1. Launch EC2 Instance

**Recommended Instance Type**: `t3.large` or `t3.xlarge` for demo purposes

```bash
# Instance specifications:
- OS: Ubuntu 22.04 LTS
- vCPUs: 2-4
- Memory: 8-16 GB
- Storage: 20-30 GB SSD
```

**Security Group Configuration**:
```
Port 22  (SSH)     - Your IP only
Port 80  (HTTP)    - 0.0.0.0/0
Port 443 (HTTPS)   - 0.0.0.0/0
Port 8080 (API)    - Internal only
Port 3000 (Frontend) - Internal only
```

### 2. Connect and Setup Server

```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker and Docker Compose
sudo apt install -y docker.io docker-compose-v2
sudo usermod -aG docker ubuntu
sudo systemctl start docker
sudo systemctl enable docker

# Logout and login again for docker group to take effect
exit
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### 3. Clone and Setup Project

```bash
# Clone your repository
git clone https://github.com/your-username/your-repo.git
cd your-repo/edu-ai-adk-version

# Create environment file
nano .env
```

**Environment Variables** (`.env`):
```env
# Google ADK Configuration
GOOGLE_APPLICATION_CREDENTIALS=/app/path/to/service-account.json
GOOGLE_PROJECT_ID=your-project-id

# API Configuration
API_HOST=0.0.0.0
API_PORT=8080

# Frontend Configuration
NEXT_PUBLIC_API_URL=http://your-domain.com/api
NODE_ENV=production

# Database
DATABASE_URL=sqlite:///./sessions.db
```

### 4. Build and Deploy with Docker

```bash
# Make sure you're in the edu-ai-adk-version directory
cd edu-ai-adk-version

# Build and start all services
docker compose up -d --build

# Check if services are running
docker compose ps
```

### 5. Configure Domain (Optional)

If you have a domain name:

```bash
# Update Nginx configuration
sudo nano nginx/nginx.conf

# Replace 'localhost' with your domain name
# Uncomment HTTPS sections if you have SSL certificates

# Restart Nginx container
docker compose restart nginx
```

### 6. SSL Setup with Let's Encrypt (Optional)

```bash
# Install certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 📋 Service Verification

### Check Service Status
```bash
# View all containers
docker compose ps

# Check logs
docker compose logs backend
docker compose logs frontend
docker compose logs nginx

# Check API health
curl http://localhost:8080/hello

# Check frontend
curl http://localhost:3000
```

### Access the Application
- **Frontend**: `http://your-ec2-ip` or `http://your-domain.com`
- **API Documentation**: `http://your-ec2-ip/api/docs`
- **Health Check**: `http://your-ec2-ip/health`

## 🔧 Configuration Files

### Docker Compose Services

The `docker-compose.yml` includes:

1. **Backend Service**
   - FastAPI with Google ADK agents
   - Port 8080 (internal)
   - Volume mounts for database and data

2. **Frontend Service**
   - Next.js application
   - Port 3000 (internal)
   - Production build

3. **Nginx Service**
   - Reverse proxy
   - Ports 80 and 443 (external)
   - Load balancing and caching

### Nginx Configuration

Key features in `nginx/nginx.conf`:
- Reverse proxy for API and frontend
- Rate limiting
- Security headers
- Static file caching
- SSL ready (commented out)

## 🎓 University Demo Setup

### Demo Data Preparation

1. **Create sample essays** in the `data/` directory
2. **Prepare demo user sessions**
3. **Configure realistic demo scenarios**

### Performance Optimization

```bash
# For better performance during demos:
# Increase Docker resources
sudo nano /etc/docker/daemon.json

{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}

sudo systemctl restart docker
```

### Monitoring Commands

```bash
# Monitor resource usage
htop
docker stats

# Check application logs
docker compose logs -f

# Monitor Nginx access
docker compose exec nginx tail -f /var/log/nginx/access.log
```

## 🔒 Security Considerations

### Firewall Setup
```bash
# Enable UFW firewall
sudo ufw enable
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
```

### Regular Updates
```bash
# Create update script
nano ~/update-demo.sh

#!/bin/bash
cd ~/your-repo/edu-ai-adk-version
git pull origin main
docker compose down
docker compose up -d --build
docker system prune -f

chmod +x ~/update-demo.sh
```

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**:
```bash
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :8080
```

2. **Docker permission issues**:
```bash
sudo usermod -aG docker $USER
# Logout and login again
```

3. **Memory issues**:
```bash
# Check memory usage
free -h
# Increase swap if needed
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

4. **SSL certificate issues**:
```bash
sudo certbot certificates
sudo certbot renew --dry-run
```

### Log Locations

```bash
# Application logs
docker compose logs backend
docker compose logs frontend
docker compose logs nginx

# System logs
sudo journalctl -u docker
```

## 📊 Performance Monitoring

### Setup Monitoring (Optional)

```bash
# Install monitoring tools
sudo apt install -y htop iotop nethogs

# Monitor in real-time
htop                    # CPU and memory
iotop                   # Disk I/O
nethogs                 # Network usage
docker stats            # Container stats
```

## 🔄 Backup and Recovery

### Database Backup
```bash
# Backup SQLite database
cp sessions.db sessions_backup_$(date +%Y%m%d_%H%M%S).db

# Automated backup script
nano ~/backup-db.sh

#!/bin/bash
cd ~/your-repo/edu-ai-adk-version
cp sessions.db ~/backups/sessions_$(date +%Y%m%d_%H%M%S).db
find ~/backups -name "sessions_*" -mtime +7 -delete

# Add to crontab for daily backups
crontab -e
# Add: 0 2 * * * ~/backup-db.sh
```

## 🎯 Demo Day Checklist

- [ ] EC2 instance running and accessible
- [ ] All Docker containers healthy
- [ ] Frontend loads correctly
- [ ] API endpoints responding
- [ ] SSL certificate valid (if using HTTPS)
- [ ] Demo data prepared
- [ ] Backup of working state created
- [ ] Performance monitoring active
- [ ] Firewall configured properly

## 📞 Support

For issues during deployment:
1. Check container logs: `docker compose logs`
2. Verify network connectivity
3. Check EC2 security groups
4. Review environment variables
5. Monitor resource usage

## 🎉 Success Metrics

Your deployment is successful when:
- Frontend accessible at your domain/IP
- All 8 AI agents functional
- Essay evaluation working
- Progress tracking operational
- Demo scenarios ready for presentation

---

**Ready for Demo! 🚀**

Your AI Educational Platform is now deployed and ready to demonstrate the power of Google's ADK for university education transformation.

