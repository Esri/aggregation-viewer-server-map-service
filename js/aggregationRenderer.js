define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "esri/renderers/Renderer",
  "esri/renderers/jsonUtils"
],
function (declare, lang, Renderer, rendererJsonUtils) {

  var AggregationRenderer = declare(Renderer, {
    declaredClass: "AggregationRenderer",

    constructor: function (properties, labels, fieldStatistics, binRenderer, geoHashStyle, featureRenderer) {

      this.defaultAggregationRenderer = {
        "type": "aggregation",
        "style": "Grid",
        "featureThreshold": 0,
        "lodOffset": 0,
        "minBinSizeInPixels": 25,
        "labels": null,
        "fieldStatistics": {
          "fieldName": "",
          "statisticsType": ""
        },
        "binRenderer": {
          "type": "Continuous",
          "minValue": null,
          "maxValue": null,
          "minColor": null,
          "maxColor": null,
          "minSize": null,
          "maxSize": null,
          "normalizeByBinArea": false
        },
        "geoHashStyle": {
          "style": "null",
          "sr": "null"
        },
        "featureRenderer": {
          "type": "simple",
          "symbol": null,
          "rotationType": "",
          "rotationExpression": "",
          "label": "",
          "description": ""
        }
      };

      this.agg = {
        "type": this.defaultAggregationRenderer.type,
        "style": properties ? properties.style : this.defaultAggregationRenderer.style,
        "featureThreshold": properties ? properties.featureThreshold : this.defaultAggregationRenderer.featureThreshold,
        "lodOffset": properties ? properties.lodOffset : this.defaultAggregationRenderer.lodOffset,
        "minBinSizeInPixels": properties ? properties.minBinSizeInPixels : this.defaultAggregationRenderer.minBinSizeInPixels,
        "labels": labels ? labels : this.defaultAggregationRenderer.labels,
        "fieldStatistics": fieldStatistics ? fieldStatistics : this.defaultAggregationRenderer.fieldStatistics,
        "binRenderer": binRenderer ? binRenderer : this.defaultAggregationRenderer.binRenderer,
        "geoHashStyle": geoHashStyle ? geoHashStyle : this.defaultAggregationRenderer.geoHashStyle,
        "featureRenderer": featureRenderer ? featureRenderer : this.defaultAggregationRenderer.featureRenderer
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

    getLabels: function () {
      return this.agg.labels
    },
    setLabels: function (labels) {
      this.agg.labels = labels;
      return this
    },

    getFieldStatistics: function () {
      return this.agg.fieldStatistics
    },
    setFieldStatistics: function (fieldStatistics) {
      this.agg.fieldStatistics = fieldStatistics;
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
        labels: this.agg.labels,
        fieldStatistics: this.agg.fieldStatistics,
        binRenderer: this.agg.binRenderer,
        geoHashStyle: this.agg.geoHashStyle,
        featureRenderer: this.agg.featureRenderer
      });

      return json;
    }

  });

  return AggregationRenderer;
});