import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-cricket',
    template: '',
})
export class CalulatorModel {
    functionBttns = [
        {
            "type": "FUNCTION", "value": "AC"
        },
        {
            "type": "FUNCTION", "value": "DEL"
        }];

    numericalBttns = [
        {
            "type": "NUMBER", "value": "7"
        },
        {
            "type": "NUMBER", "value": "8"
        },
        {
            "type": "NUMBER", "value": "9"
        },
        {
            "type": "NUMBER", "value": "4"
        },
        {
            "type": "NUMBER", "value": "5"
        },
        {
            "type": "NUMBER", "value": "6"
        },
        {
            "type": "NUMBER", "value": "1"
        },
        {
            "type": "NUMBER", "value": "2"
        },
        {
            "type": "NUMBER", "value": "3"
        },
        {
            "type": "NUMBER", "value": "0"
        },
        {
            "type": "NUMBER", "value": "."
        }
    ]

    operationalBttns = [
        {
            "type": "OPERATOR", "value": "Addition", "Symbol": "+"
        },
        {
            "type": "OPERATOR", "value": "Subtraction", "Symbol": "-"
        },
        {
            "type": "OPERATOR", "value": "Multiply", "Symbol": "x"
        },
        {
            "type": "OPERATOR", "value": "Divide", "Symbol": "/"
        },

        {
            "type": "OPERATOR", "value": "Result", "Symbol": "="
        },

    ];

    operationalBttnNew = [
        {
            "type": "OPERATOR", "value": "Addition", "Symbol": "+"
        },
        {
            "type": "OPERATOR", "value": "Subtraction", "Symbol": "-"
        },
        {
            "type": "OPERATOR", "value": "Multiply", "Symbol": "x"
        },
        {
            "type": "OPERATOR", "value": "Divide", "Symbol": "/"
        },

        {
            "type": "OPERATOR", "value": "Result", "Symbol": "="
        },

    ];


}



    // numericalBtns = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];
    // operationalBtns = ['+', '-', '*', '/', '='];
    // functionBtns = ['AC', 'DEL'];