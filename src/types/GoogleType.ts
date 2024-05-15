type LoginGoogleType = {
  clientId: string;
  credential: string;
};

type getTokenType = {
  config: {};
  data: { id_token: string };
  headers: {};
  request: {};
  status: number;
  statusText: string;
};
