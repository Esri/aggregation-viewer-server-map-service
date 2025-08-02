# Development Guide

## Project Structure

```
aggregation-viewer-server-map-service/
├── index.html                 # Main application
├── mapServiceViewerStyles.css  # Application styles
├── flat/                      # UI theme
│   ├── flat.css              # Main theme file
│   └── dijit/                # Dijit widget styles
├── doc/                       # Documentation
│   ├── aggregation-renderer-spec/ # Technical specification
│   └── api/                   # API documentation
└── js/                        # JavaScript modules (if present)
```

## Key Components

### Main Application (`index.html`)
- Uses ArcGIS API for JavaScript 3.46
- Implements Dojo AMD module loading
- Manages map initialization and layer configuration
- Handles UI event binding and state management

### Styling (`mapServiceViewerStyles.css`)
- Responsive layout with fixed sidebar
- Custom flat UI theme
- Dijit widget customizations

### Aggregation Renderer
- Server-side rendering implementation
- Supports multiple aggregation styles
- Dynamic threshold-based rendering switching

## Development Setup

1. **Local Development Server**
   ```bash
   # Use any local server, e.g.:
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Access Application**
   ```
   http://localhost:8000
   ```

## Code Organization

### Global Variables
- `_map` - Main map instance
- `_msLayer` - Dynamic map service layer
- `_msServiceInfo` - Service metadata
- `_msLayerInfo` - Layer metadata

### Key Functions
- `buildMap()` - Initialize map with basemap
- `updateLayerFromUI()` - Apply renderer settings from UI
- `updateRendererFromUI()` - Configure aggregation renderer
- `requestToUpdateLayerFromUI()` - Debounced update trigger

## Adding New Features

### New Aggregation Style
1. Add option to style dropdown in HTML
2. Update `updateRendererFromUI()` function
3. Test with various datasets

### New UI Controls
1. Add HTML elements in appropriate section
2. Bind event handlers in initialization
3. Update renderer configuration logic

## Testing

### Manual Testing Checklist
- [ ] Map loads with default basemap
- [ ] Service URL input accepts valid endpoints
- [ ] Aggregation styles render correctly
- [ ] Feature threshold switching works
- [ ] Time slider functionality (if applicable)
- [ ] Refresh modes operate properly

### Browser Testing
- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Use debounced updates for UI changes
- Implement proper error handling for service requests
- Consider caching for frequently accessed service metadata
- Optimize renderer updates to minimize server requests

## Debugging

### Common Issues
1. **Service URL errors**: Check CORS settings and service availability
2. **Rendering failures**: Verify aggregation renderer parameters
3. **UI responsiveness**: Check for JavaScript errors in console

### Debug Tools
- Browser developer tools
- ArcGIS API for JavaScript debugging
- Network tab for service request monitoring