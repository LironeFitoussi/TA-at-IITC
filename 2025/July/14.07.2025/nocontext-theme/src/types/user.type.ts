export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  