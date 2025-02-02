CREATE MIGRATION m1dqovbxnp3fbby3cyeng5zfqb7vhf3aayzfm537wkbkb25q3mw2gq
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::info {
      CREATE MULTI LINK persons: default::User;
      CREATE PROPERTY title: std::str;
  };
};
