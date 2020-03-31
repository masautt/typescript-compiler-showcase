import { Rule } from "./types";

export const rules: Rule[] = [
    {
        type: "<Statement List> -> <Statement> | <Statement> <Statement List>",
        values : []
    },
    {
        type :  "<Statement> -> <Assignment> | <Declaration> | <Addition> | <Division> | <Multiplication> | <Subtraction>",
        values : []
    },
    {
        type : "<Term Prime> -> (Epsilon) \n\t<Expression Prime> -> + <Term> <Expression Prime>",
        values : [{value : "+"}]
    },
    {
        type : "<Term Prime> -> (Epsilon) \n\t<Expression Prime> -> - <Term> <Expression Prime>",
        values : [{value : "-"}]
    },
    {
        type : "<Term Prime> -> (Epsilon) \n\t<Expression Prime> -> * <Term> <Expression Prime>",
        values : [{value : "*"}]
    },
    {
        type : "<Term Prime> -> (Epsilon) \n\t<Expression Prime> -> / <Term> <Expression Prime>",
        values : [{value : "/"}]
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
        type: "<Term> -> <Factor> <Term Prime>\n\t<Factor> -> <Real>",
        values : [
            { type : "real" },
            { value : ";"}
        ]
    },
    {
        type : "<Term Prime> ->  (Epsilon) \n\t<Expression Prime> -> (Epsilon)",
        values : [
            { value : ";"}
        ]
    },
    {
        type : "<Addition> -> <Expression>\n\t<Expression> -> <Identifier> + <Identifier>",
        values : [
            { type : "identifier" },
            { value : "+" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Addition> -> <Expression>\n\t<Expression> -> <Real> + <Identifier>",
        values : [
            { type : "real" },
            { value : "+" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Addition> -> <Expression>\n\t<Expression> -> <Identifier> + <Real>",
        values : [
            { type : "identifier" },
            { value : "+" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Addition> -> <Expression>\n\t<Expression> -> <Real> + <Real>",
        values : [
            { type : "real" },
            { value : "+" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Subtraction> -> <Expression>\n\t<Expression> -> <Identifier> - <Identifier>",
        values : [
            { type : "identifier" },
            { value : "-" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Subtraction> -> <Expression>\n\t<Expression> -> <Real> - <Identifier>",
        values : [
            { type : "real" },
            { value : "-" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Subtraction> -> <Expression>\n\t<Expression> -> <Identifier> - <Real>",
        values : [
            { type : "identifier" },
            { value : "-" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Subtraction> -> <Expression>\n\t<Expression> -> <Real> - <Real>",
        values : [
            { type : "real" },
            { value : "-" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Division> -> <Expression>\n\t<Expression> -> <Identifier> / <Identifier>",
        values : [
            { type : "identifier" },
            { value : "/" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Division> -> <Expression>\n\t<Expression> -> <Real> / <Identifier>",
        values : [
            { type : "real" },
            { value : "/" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Division> -> <Expression>\n\t<Expression> -> <Identifier> / <Real>",
        values : [
            { type : "identifier" },
            { value : "/" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Division> -> <Expression>\n\t<Expression> -> <Real> / <Real>",
        values : [
            { type : "real" },
            { value : "/" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Multiplication> -> <Expression>\n\t<Expression> -> <Identifier> * <Identifier>",
        values : [
            { type : "identifier" },
            { value : "*" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Multiplication> -> <Expression>\n\t<Expression> -> <Real> * <Identifier>",
        values : [
            { type : "real" },
            { value : "*" },
            { type : "identifier" },
            { value: ";" }
        ]
    },
    {
        type : "<Multiplication> -> <Expression>\n\t<Expression> -> <Identifier> * <Real>",
        values : [
            { type : "identifier" },
            { value : "*" },
            { type : "real" },
            { value: ";" }
        ]
    },
    {
        type : "<Multiplication> -> <Expression>\n\t<Expression> -> <Real> * <Real>",
        values : [
            { type : "real" },
            { value : "*" },
            { type : "real" },
            { value: ";" }
        ]
    }
]  