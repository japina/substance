'use strict';

var TableNode = require('./TableNode');
var TableComponent = require('./TableComponent');
var InsertTableCommand = require('./InsertTableCommand');
var InsertTableTool = require('./InsertTableTool');
var path = require('path');

module.exports = {
  name: 'table',
  configure: function(config) {
    config.addNode(TableNode);
    config.addComponent(TableNode.static.name, TableComponent);
    config.addCommand(InsertTableCommand);
    config.addTool(InsertTableTool);
    config.addIcon(InsertTableCommand.static.name, { 'fontawesome': 'fa-table' });
    config.addStyle(path.join(__dirname, '/_table.scss'));
    config.addLabel('table', {
      en: 'Table',
      de: 'Tabelle'
    });
  }
};
