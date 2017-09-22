import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";


import {NumericEditorComponent} from "../aggridcommon/numeric-editor.component";
import {MoodRendererComponent} from "../aggridcommon/mood-renderer.component";
import {MoodEditorComponent} from "../aggridcommon/mood-editor.component";

@Component({
    selector: 'my-app',
    templateUrl: './editor.component.html'
})
export class EditorComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: EditorComponent.createRowData(),
            columnDefs: EditorComponent.createColumnDefs()
        };
    }

    private static createColumnDefs() {
        return [
            {
                headerName: "Name",
                field: "name",
                width: 300,
                editable: true,
                cellEditor: 'richSelect',
                cellEditorParams: {
                    values: [
                        "Bob",
                        "Harry",
                        "Sally",
                        "Mary",
                        "John",
                        "Jack",
                        "Sue",
                        "Sean",
                        "Niall",
                        "Albert",
                        "Fred",
                        "Jenny",
                        "Larry"
                    ]
                }
            },
            {
                headerName: "Mood",
                field: "mood",
                cellRendererFramework: MoodRendererComponent,
                cellEditorFramework: MoodEditorComponent,
                editable: true,
                width: 300
            },
            {
                headerName: "Numeric",
                field: "number",
                cellEditorFramework: NumericEditorComponent,
                editable: true,
                width: 280
            }
        ];
    }

    private static createRowData() {
        return [
            {name: "Bob", mood: "Happy", number: 10},
            {name: "Harry", mood: "Sad", number: 3},
            {name: "Sally", mood: "Happy", number: 20},
            {name: "Mary", mood: "Sad", number: 5},
            {name: "John", mood: "Happy", number: 15},
            {name: "Jack", mood: "Happy", number: 25},
            {name: "Sue", mood: "Sad", number: 43},
            {name: "Sean", mood: "Sad", number: 1335},
            {name: "Niall", mood: "Happy", number: 2},
            {name: "Alberto", mood: "Happy", number: 123},
            {name: "Fred", mood: "Sad", number: 532},
            {name: "Jenny", mood: "Happy", number: 34},
            {name: "Larry", mood: "Happy", number: 13},
        ];
    }
}