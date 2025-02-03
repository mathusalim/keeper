module default {
    type User{
        required name:str;
        settings: Settings;
        multi months: Month;
    }

    type Settings {
        multi currencies: Currency;
        multi tags: Tag;
        multi choices: Choice;
        multi categories: Category;
    }

    type Month {
        date:str {
            constraint exclusive;
        }
        multi incomes:Income;
        multi spendings:Spending;
        mainCurrency:Currency;
        multi rates:Rate;
    }

    abstract type Rate{
        sourceCurrency:Currency;
        rate:float32;
    }

    abstract type Income{
        label:str;
        originalCurrency:Currency;
        originalValue:float32;
        primaryCurrency:Currency;
        value:float32;
    }

    abstract type Spending{
        label: str;
        originalCurrency: Currency;
        originalValue: float32;
        primaryCurrency: Currency;
        value: float32;
        category: Category;
        tag: Tag;
        multi choices: Choice;
    }

    abstract type BasicData{
        required name:str{
            constraint exclusive;
        }
    }

    type Tag extending BasicData {

    }

    type Currency extending BasicData {

    }

    type Category extending BasicData {

    }

    type Choice extending BasicData {

    }

}
