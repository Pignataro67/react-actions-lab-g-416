'use strict';

function addColumn (ev) {
  ev.preventDefault();
  this.setState({
    table: this.state.table.map(row => [...row, ''])
  });
}

function addRow (ev) {
  ev.preventDefault();
  this.setState({
    table: [...this.state.table, this.state.table[0].map(el => '')]
  });
}

function changeCell (rowIndex, columnIndex, ev) {
}

function focusCell (rowIndex, columnIndex) {
}

function blurCell () {
}

function removeRow (ev) {
}

function removeColumn (ev) {
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
