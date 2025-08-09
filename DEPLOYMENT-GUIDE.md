# Coffee Shop React App Deployment Guide - dev.qadi-tech.com

## Overview
This document outlines the complete deployment process for the React coffee shop application from the GitHub repository `https://github.com/MohammedHossam1/coffee.git` to the subdomain `dev.qadi-tech.com`.

## Prerequisites
- Ubuntu Server with Nginx installed
- Node.js and npm installed (v22.17.0 and v10.9.2 used)
- Domain/subdomain DNS pointing to server
- Certbot for SSL certificates

## Deployment Steps

### 1. Clone Repository
```bash
cd /var/www
git clone https://github.com/MohammedHossam1/coffee.git dev.qadi-tech.com
```

### 2. Install Dependencies and Build
```bash
cd /var/www/dev.qadi-tech.com
npm install
npm run build
```

**Build Output:**
- Successfully built production files in `dist/` directory
- Generated optimized JS, CSS, and asset files
- Build size: ~490KB main bundle, ~46KB CSS

### 3. Deploy Built Files
```bash
# Copy built files to root directory for nginx serving
cp -r dist/* .
```

**Files deployed to root:**
- `index.html` - Main HTML file
- `assets/` - Optimized JS, CSS, and image files
- `favicon.ico` - Site favicon
- `fonts/` - Custom font files
- `robots.txt` - SEO file

### 4. Create Nginx Configuration
Created `/etc/nginx/sites-available/dev.qadi-tech.com`:

```nginx
server {
    server_name dev.qadi-tech.com;
    
    root /var/www/dev.qadi-tech.com;
    index index.html index.htm;

    location /.well-known/acme-challenge/ {
        root /var/www/dev.qadi-tech.com;
    }

    # Handle React Router - Essential for SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets for performance
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    listen 80;
}
```

### 5. Enable Site
```bash
# Create symbolic link to enable site
sudo ln -s /etc/nginx/sites-available/dev.qadi-tech.com /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 6. SSL Certificate Setup
```bash
# Install Let's Encrypt certificate
sudo certbot --nginx -d dev.qadi-tech.com --non-interactive --agree-tos --email admin@qadi-tech.com
```

**SSL Configuration Added:**
- HTTPS on port 443
- HTTP to HTTPS redirect
- Auto-renewal configured

### 7. Set Proper Permissions
```bash
# Change ownership to nginx user
sudo chown -R www-data:www-data /var/www/dev.qadi-tech.com
```

## Technical Details

### Project Structure
- **Framework**: React + Vite
- **Build Tool**: Vite (v7.1.1)
- **Dependencies**: React 19.1.0, React Router, Framer Motion, TailwindCSS
- **Bundle Size**: ~490KB main JS, ~46KB CSS

### Key Configuration Features
1. **SPA Routing Support**: `try_files $uri $uri/ /index.html;` ensures React Router works
2. **Static Asset Caching**: 1-year cache for performance optimization
3. **Security Headers**: XSS protection, frame options, content-type sniffing prevention
4. **SSL/TLS**: Full HTTPS with automatic HTTP redirect

### Build Warnings Handled
- Font files resolved at runtime (expected behavior)
- "use client" directives ignored (normal for SSR libraries in SPA build)

## Verification

### Status Check
```bash
# Test HTTPS response
curl -I https://dev.qadi-tech.com
# Response: HTTP/2 200 OK with security headers
```

### Final Configuration
- **URL**: https://dev.qadi-tech.com
- **SSL Certificate**: Valid until November 6, 2025
- **Auto-renewal**: Configured via certbot

## Deployment Pattern Comparison

This deployment follows the same successful pattern used for `dahab-restaurant.com`:

| Aspect | dahab-restaurant.com | dev.qadi-tech.com |
|--------|---------------------|-------------------|
| Framework | Angular | React + Vite |
| Location | `/var/www/dahab-restaurant.com/` | `/var/www/dev.qadi-tech.com/` |
| Nginx Config | SPA routing support | SPA routing support |
| SSL | Let's Encrypt | Let's Encrypt |
| Permissions | `www-data:www-data` | `www-data:www-data` |

## Maintenance

### Future Updates
1. Pull latest changes from repository
2. Run `npm install` (if dependencies changed)
3. Run `npm run build`
4. Copy new build files: `cp -r dist/* .`
5. Reload nginx if needed

### SSL Certificate Renewal
- Automatic renewal configured via certbot
- Manual renewal: `sudo certbot renew`

## Troubleshooting

### Common Issues
1. **404 on page refresh**: Ensure `try_files $uri $uri/ /index.html;` is in nginx config
2. **Mixed content warnings**: Ensure all resources load over HTTPS
3. **Font loading issues**: Check font paths are accessible

### Logs
- Nginx logs: `/var/log/nginx/access.log`, `/var/log/nginx/error.log`
- SSL logs: `/var/log/letsencrypt/letsencrypt.log`

## Conclusion

The React coffee shop application has been successfully deployed to `https://dev.qadi-tech.com` with:
- ✅ Full HTTPS encryption
- ✅ SPA routing support
- ✅ Optimized static file serving
- ✅ Security headers
- ✅ Automatic SSL renewal

The deployment is production-ready and follows industry best practices for React SPA hosting.
