CREATE MIGRATION m16ij44mo7r4y62gw5irt453lhskwqoxwfmkwcg3yggh6oiolsittq
    ONTO m1dqovbxnp3fbby3cyeng5zfqb7vhf3aayzfm537wkbkb25q3mw2gq
{
  CREATE ABSTRACT TYPE default::BasicData {
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Category EXTENDING default::BasicData;
  CREATE TYPE default::Choice EXTENDING default::BasicData;
  CREATE TYPE default::Currency EXTENDING default::BasicData;
  CREATE TYPE default::Tag EXTENDING default::BasicData;
  ALTER TYPE default::info {
      DROP LINK persons;
  };
  ALTER TYPE default::info {
      DROP PROPERTY title;
  };
  ALTER TYPE default::info RENAME TO default::Settings;
  CREATE ABSTRACT TYPE default::Income {
      CREATE LINK originalCurrency: default::Currency;
      CREATE LINK primaryCurrency: default::Currency;
      CREATE PROPERTY label: std::str;
      CREATE PROPERTY originalValue: std::float32;
      CREATE PROPERTY value: std::float32;
  };
  CREATE ABSTRACT TYPE default::Rate {
      CREATE LINK sourceCurrency: default::Currency;
      CREATE PROPERTY rate: std::float32;
  };
  CREATE ABSTRACT TYPE default::Spending {
      CREATE LINK category: default::Category;
      CREATE MULTI LINK choices: default::Choice;
      CREATE LINK originalCurrency: default::Currency;
      CREATE LINK primaryCurrency: default::Currency;
      CREATE LINK tag: default::Tag;
      CREATE PROPERTY label: std::str;
      CREATE PROPERTY originalValue: std::float32;
      CREATE PROPERTY value: std::float32;
  };
  CREATE TYPE default::Month {
      CREATE MULTI LINK incomes: default::Income;
      CREATE LINK mainCurrency: default::Currency;
      CREATE MULTI LINK rates: default::Rate;
      CREATE MULTI LINK spendings: default::Spending;
      CREATE PROPERTY date: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::User {
      CREATE MULTI LINK months: default::Month;
      CREATE LINK settings: default::Settings;
  };
  ALTER TYPE default::Settings {
      CREATE MULTI LINK categories: default::Category;
      CREATE MULTI LINK choices: default::Choice;
      CREATE MULTI LINK currencies: default::Currency;
      CREATE MULTI LINK tags: default::Tag;
  };
};
