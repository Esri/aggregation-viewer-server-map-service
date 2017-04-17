# aggregation-viewer-server-map-service

Sample JavaScript Map Service Aggregation Viewer, rendering map images server side.

This sample is using export map image request with an aggregation renderer, receiving map images rendered server side, and rendering them client side using a client ArcGIS Dynamic Map Service Layer.

Server side rendering based on server side Flat Hexagon aggregation Grid style:

![App](server-flat-hexagon-grid-style.png?raw=true)

Server side rendering based on server side Flat Hexagon aggregation Oval style:

![alt text](server-flat-hexagon-oval-style.png?raw=true)

Server side rendering auto-switched to render Raw Features based on actual Features Count and the Feature Threshold value, which is set to 10,000:

![alt text](server-flat-hexagon-raw-features.png?raw=true)


## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](license.txt?raw=true) file.
