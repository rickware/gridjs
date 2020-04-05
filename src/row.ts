import Cell from './cell';
import Base from './base';

class Row extends Base {
  private _cells: Cell[];

  constructor(cells?: Cell[]) {
    super();

    this.cells = cells || [];
  }

  public get cells(): Cell[] {
    return this._cells;
  }

  public set cells(cells: Cell[]) {
    this._cells = cells;
  }

  /**
   * Creates a new Row from an array of Cell(s)
   * This method generates a new ID for the Row and all nested elements
   *
   * @param cells
   * @returns Row
   */
  static fromCells(cells: Cell[]): Row {
    return new Row(cells.map(cell => new Cell(cell.data)));
  }

  get length(): number {
    return this.cells.length;
  }
}

export default Row;
