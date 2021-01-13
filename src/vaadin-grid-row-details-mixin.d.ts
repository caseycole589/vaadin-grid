/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/vaadin-grid-row-details-mixin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {flush} from '@polymer/polymer/lib/utils/flush.js';

export {RowDetailsMixin};

declare function RowDetailsMixin<T extends new (...args: any[]) => {}>(base: T): T & RowDetailsMixinConstructor;

interface RowDetailsMixinConstructor {
  new(...args: any[]): RowDetailsMixin;
}

export {RowDetailsMixinConstructor};

interface RowDetailsMixin {

  /**
   * An array containing references to items with open row details.
   */
  detailsOpenedItems: Array<GridItem|null>|null|undefined;
  _rowDetailsTemplate: HTMLTemplateElement|null;

  /**
   * Custom function for rendering the content of the row details.
   * Receives three arguments:
   *
   * - `root` The row details content DOM element. Append your content to it.
   * - `grid` The `<vaadin-grid>` element.
   * - `model` The object with the properties related with
   *   the rendered item, contains:
   *   - `model.index` The index of the item.
   *   - `model.item` The item.
   */
  rowDetailsRenderer: GridRowDetailsRenderer|null|undefined;
  _detailsCells: HTMLElement[]|undefined;
  _configureDetailsCell(cell: HTMLElement): void;
  _toggleDetailsCell(row: HTMLElement, item: GridItem): void;
  _updateDetailsCellHeights(): void;
  _isDetailsOpened(item: GridItem): boolean;

  /**
   * Open the details row of a given item.
   */
  openItemDetails(item: GridItem): void;

  /**
   * Close the details row of a given item.
   */
  closeItemDetails(item: GridItem): void;
}

import {GridItem} from '../@types/interfaces';

import {GridRowDetailsRenderer} from '../@types/interfaces';