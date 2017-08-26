/*
  Copyright 1995-2017 Esri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

  For additional information, contact:
  Environmental Systems Research Institute, Inc.
  Attn: Contracts Dept
  380 New York Street
  Redlands, California, USA 92373

  email: contracts@esri.com
*/

define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "esri/renderers/Renderer",
  "esri/renderers/jsonUtils"
],
function (declare, lang, Renderer, rendererJsonUtils) {

  var AggregationRenderer = declare(Renderer, {
    declaredClass: "AggregationRenderer",

    constructor: function (properties, labels, fieldStatistic, binRenderer, geoHashStyle, featureRenderer, backgroundColor) {

      this.defaultAggregationRenderer = {
        type: "aggregation",
        style: "Grid",
        featureThreshold: 0,
        lodOffset: 0,
        minBinSizeInPixels: 25,
        fullLodGrid: false,
        labels: {
          color: [0,0,0,255],
          font: "Arial",
          size: 12,
          style: "PLAIN",
          format: "###.#KMB"
        },
        fieldStatistic: {
          fieldName: "",
          statisticType: ""
        },
        binRenderer: {
          type: "Continuous",
          minColor: [255,0,0,20],
          maxColor: [255,0,0,255],
          minOutlineColor: [0,0,0,100],
          maxOutlineColor: [0,0,0,100],
          minOutlineWidth: 0.5,
          maxOutlineWidth: 0.5,
          minValue: null,
          maxValue: null,
          minSize: 100,
          maxSize: 100,
          normalizeByBinArea: false
        },
        geoHashStyle: {
          style: "geohash",
          sr: "4326"
        },
        featureRenderer: {
          type: "simple",
          symbol:  {
            type: "esriSMS",
            style: "esriSMSCircle",
            color: [255,0,0,255],
            size: 12,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
            outline: {
              color: [0,0,0,255],
              width: 1
            }
          },
          rotationType: "",
          rotationExpression: "",
          label: "",
          description: ""
        },
        backgroundColor: [0,0,255,0]
      };

      this.agg = {
        type: this.defaultAggregationRenderer.type,
        style: properties ? properties.style : this.defaultAggregationRenderer.style,
        featureThreshold: properties ? properties.featureThreshold : this.defaultAggregationRenderer.featureThreshold,
        lodOffset: properties ? properties.lodOffset : this.defaultAggregationRenderer.lodOffset,
        minBinSizeInPixels: properties ? properties.minBinSizeInPixels : this.defaultAggregationRenderer.minBinSizeInPixels,
        fullLodGrid: fullLodGrid ? fullLodGrid : this.defaultAggregationRenderer.fullLodGrid,
        labels: labels ? labels : this.defaultAggregationRenderer.labels,
        fieldStatistic: fieldStatistic ? fieldStatistic : this.defaultAggregationRenderer.fieldStatistic,
        binRenderer: binRenderer ? binRenderer : this.defaultAggregationRenderer.binRenderer,
        geoHashStyle: geoHashStyle ? geoHashStyle : this.defaultAggregationRenderer.geoHashStyle,
        featureRenderer: featureRenderer ? featureRenderer : this.defaultAggregationRenderer.featureRenderer,
        backgroundColor: backgroundColor ? backgroundColor : this.defaultAggregationRenderer.backgroundColor
      };
    },

    getStyle: function () {
      return this.agg.style;
    },
    setStyle: function (style) {
      this.agg.style = style;
      return this
    },

    getFeatureThreshold: function () {
      return this.agg.featureThreshold;
    },
    setFeatureThreshold: function (featureThreshold) {
      this.agg.featureThreshold = featureThreshold;
      return this
    },

    getLodOffset: function () {
      return this.agg.lodOffset;
    },
    setLodOffset: function (lodOffset) {
      this.agg.lodOffset = lodOffset;
      return this
    },

    getMinBinSizeInPixels: function () {
      return this.agg.minBinSizeInPixels;
    },
    setMinBinSizeInPixels: function (minBinSizeInPixels) {
      this.agg.minBinSizeInPixels = minBinSizeInPixels;
      return this
    },

    getFullLodGrid: function () {
      return this.agg.fullLodGrid
    },
    setFullLodGrid: function (fullLodGrid) {
      this.agg.fullLodGrid = fullLodGrid;
      return this
    },

    getLabels: function () {
      return this.agg.labels
    },
    setLabels: function (labels) {
      this.agg.labels = labels;
      return this
    },

    getFieldStatistic: function () {
      return this.agg.fieldStatistic
    },
    setFieldStatistic: function (fieldStatistic) {
      this.agg.fieldStatistic = fieldStatistic;
      return this
    },

    getBinRenderer: function () {
      return this.agg.binRenderer
    },
    setBinRenderer: function (binRenderer) {
      this.agg.binRenderer = binRenderer;
      return this
    },

    getGeoHashStyle: function () {
      return this.agg.geoHashStyle
    },
    setGeoHashStyle: function (geoHashStyle) {
      this.agg.geoHashStyle = geoHashStyle;
      return this
    },

    getFeatureRenderer: function () {
      return this.agg.featureRenderer
    },
    setFeatureRenderer: function (featureRenderer) {
      this.agg.featureRenderer = featureRenderer;
      return this
    },

    toJson: function () {
      var json = lang.mixin(this.inherited(arguments), {
        type: this.agg.type,
        style: this.agg.style,
        featureThreshold: this.agg.featureThreshold,
        lodOffset: this.agg.lodOffset,
        minBinSizeInPixels: this.agg.minBinSizeInPixels,
        fullLodGrid: this.agg.fullLodGrid,
        labels: this.agg.labels,
        fieldStatistic: this.agg.fieldStatistic,
        binRenderer: this.agg.binRenderer,
        geoHashStyle: this.agg.geoHashStyle,
        featureRenderer: this.agg.featureRenderer
      });

      return json;
    }

  });

  return AggregationRenderer;
});