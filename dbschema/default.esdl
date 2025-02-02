module default {
    type User{
        required name:str;
    }

    type info{
        title: str;
        multi persons: User;
    }
}
