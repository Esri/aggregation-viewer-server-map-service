# Installation Guide

## Prerequisites

- Modern web browser with JavaScript enabled
- Web server (for local development)
- Access to ArcGIS map services that support aggregation rendering

## Quick Installation

### Option 1: Direct Browser Access
1. Download or clone the repository
2. Open `index.html` directly in a web browser
3. Enter a valid ArcGIS map service URL

### Option 2: Local Web Server (Recommended)
1. Download or clone the repository
2. Start a local web server in the project directory:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

## Configuration

### Map Service Requirements
The application requires ArcGIS map services that support:
- Dynamic map service layer capabilities
- Aggregation rendering (ArcGIS Server 10.4+)
- Time-aware data (optional, for temporal features)

### Sample Service URLs
```
# Example spatiotemporal big data store services
https://your-server/arcgis/rest/services/YourService/MapServer

# Ensure the service supports:
# - Export Map operation
# - Dynamic layer capabilities
# - Aggregation renderer
```

## Customization

### Basemap Configuration
Edit the basemap options in `index.html`:
```html
<select name="basemapUrl" id="basemapUrl">
  <option value="your-basemap-url">Custom Basemap</option>
</select>
```

### Default Settings
Modify default values in the JavaScript initialization:
```javascript
var _defaultWkid = 102100;  // Default spatial reference
var _wkid = 102100;         // Current spatial reference
```

### Styling
Customize the appearance by modifying `mapServiceViewerStyles.css`:
- Control panel width and styling
- Color schemes
- Font settings

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure the map service allows cross-origin requests
   - Use a local web server instead of file:// protocol

2. **Service Not Loading**
   - Verify the service URL is accessible
   - Check that the service supports required capabilities
   - Ensure proper authentication if required

3. **Aggregation Not Working**
   - Confirm the service supports aggregation rendering
   - Check ArcGIS Server version (10.4+ required)
   - Verify layer has appropriate data for aggregation

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Deployment

### Production Deployment
1. Upload files to web server
2. Configure proper MIME types for .css and .js files
3. Ensure HTTPS if accessing secure services
4. Test with target map services

### Security Considerations
- Validate all user inputs
- Use HTTPS for production deployments
- Implement proper authentication for restricted services
- Consider implementing Content Security Policy (CSP)