import { Rule } from "./types";
export const rules: Rule[] = [
    {
        type: "<Statement List> -> <Statement> | <Statement> <Statement List>",
        values : []
    },
    {
        type :  "<Statement> -> <Assignment> | <Declaration> | <>",
        values : []
    },
    {
        type: "<Assignment> -> <Identifier> = <Expression> ;\n\t<Expression> -> <Identifier>",
        values: [
            { type: "identifier" },
            { value: "=" },
            { type: "identifier" },
            { value: ";" }
        ]
    },
    {
        type: "<Assignment> -> <Identifier> = <Expression> ;\n\t<Expression> -> <Value>",
        values: [
            { type: "identifier" },
            { value: "=" },
            { type: "real" },
            { value: ";" }
        ]
    },
    {
        type: "<Assignment> -> <Identifier> = <Expression> ;\n\t<Expression> -> <Value>",
        values: [
            { type: "identifier" },
            { value: "=" },
            { value: "true" },
            { value: ";" }
        ]
    },
    {
        type: "<Assignment> -> <Identifier> = <Expression> ;\n\t<Expression> -> <Value>",
        values:
            [
                { type: "identifier" },
                { value: "=" },
                { value: "false" },
                { value: ";" }
            ],
    },
    {
        type: "<Declaration> -> <Type> <Identifier> ;",
        values: [

            { value: "int" },
            { type: "identifier" },
            { value: ";" }
        ],
    },
    {
        type: "<Declaration> -> <Type> <Identifier> ;",
        values: [
            { value: "float" },
            { type: "identifier" },
            { value: ";" }

        ],
    },
    {
        type: "<Declaration> -> <Type> <Identifier> ;",
        values: [
            { value: "bool" },
            { type: "identifier" },
            { value: ";" }
        ]
    },
    {
        type: "<Term> -> <Factor> <Term Prime>\n\t<Factor> -> <Identifier>",
        values : [
            { type : "identifier" },
            { value : ";"}
        
        ]
    },
    {
        type : "<Term Prime> ->  (Epsilon) \n\t<Expression Prime> -> (Epsilon)",
        values : [
            { value : ";"}
        ]
    }
]  