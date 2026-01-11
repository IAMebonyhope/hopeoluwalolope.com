# Hope Oluwalolope - Personal Website

This is the personal website for Hope Oluwalolope, featuring community programs, blog, and event pages.


## Deployment Instructions

### Deploying to Namecheap Hosting

To deploy this site to your Namecheap hosting account using SSH and Git:

#### 1. SSH into your Namecheap hosting account
```bash
ssh your_username@your_domain.com
# or
ssh your_username@server_ip_address
```

#### 2. Navigate to your public HTML directory
```bash
cd public_html

```


#### 3. Pull the latest changes
```bash
git pull
```

### Important Notes:

**File Structure Consideration:**
- Your files should go in `public_html/` directory
- Make sure your `index.php` (or `index.html`) is in the root of `public_html/`
- PHP files in the `views/` folder can be accessed directly via URL (e.g., `yourdomain.com/views/intentional-2026-event.php`)

**Alternative Deployment Methods:**
If SSH isn't available:
1. **FTP/SFTP:** Use FileZilla or similar to upload files
2. **cPanel File Manager:** Upload files through the web interface
3. **GitHub Integration:** Some hosts offer direct GitHub integration

**Quick Check Commands:**
```bash
# Check current directory
pwd

# List files to verify upload
ls -la

# Check git status
git status
```

### Typical Namecheap Setup:
- Files should be placed in the `public_html/` directory
- PHP version compatibility should be checked
- Update `.htaccess` file for proper routing if needed

## Development

This site uses:
- HTML5/CSS3
- JavaScript
- PHP
- Bootstrap framework
- Custom styling and animations


## Contact

For questions about deployment or the website, contact Hope Oluwalolope.