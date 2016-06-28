'use strict';

var ImageNode = require('./Image');
var ImageComponent = require('./ImageComponent');
var InsertImageCommand = require('./InsertImageCommand');
var InsertImageTool = require('./InsertImageTool');
var path = require('path');

module.exports = {
  name: 'image',
  configure: function(config) {
    config.addNode(ImageNode);
    config.addComponent(ImageNode.static.name, ImageComponent);
    config.addCommand(InsertImageCommand);
    config.addTool(InsertImageTool);
    config.addIcon(InsertImageCommand.static.name, { 'fontawesome': 'fa-image' });
    config.addLabel('image', {
      en: 'Image',
      de: 'Bild'
    });
    config.addStyle(path.join(__dirname, '_image.scss'));
    config.addLabel('insert-image', {
      en: 'Insert image',
      de: 'Bild einfügen'
    });
  }
};
